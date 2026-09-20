// Permit content changes, not new imports, calls, event handlers or executable behavior.
import ts from "typescript";
import {readFileSync} from "node:fs";
const [originalPath, proposedPath] = process.argv.slice(2);
function analyze(path) {
  const source=readFileSync(path,"utf8");
  const sf=ts.createSourceFile(path,source,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
  if(sf.parseDiagnostics.length) throw new Error("Invalid TSX");
  const expressions=[];
  const nodes=[];
  const tags=new Set();
  const attrs=[];
  const classes=new Set();
  const styles=[];
  // Walk every descendant, including literal data that shape() deliberately skips.
  function design(node) {
    if(ts.isJsxAttribute(node)||ts.isPropertyAssignment(node)) {
      const name=node.name.getText(sf).replace(/^['"]|['"]$/g,"");
      const value=node.initializer;
      if((name==="className"||name==="class")&&value) {
        const expr=ts.isJsxExpression(value)?value.expression:value;
        classes.add(expr&&(ts.isStringLiteral(expr)||ts.isNoSubstitutionTemplateLiteral(expr))
          ?expr.text.trim().split(/\s+/).sort().join(" "):value.getText(sf));
      }
      if(["style","bgcolor","color","face"].includes(name))styles.push(node.getText(sf));
    }
    ts.forEachChild(node,child=>{design(child);});
  }
  design(sf);
  function literal(node) {
    if(ts.isStringLiteral(node)&&/^\s*(javascript|vbscript|data):/i.test(node.text))throw new Error("Unsafe URL literal");
    return ts.isStringLiteral(node)||ts.isNumericLiteral(node)
      ||[ts.SyntaxKind.TrueKeyword,ts.SyntaxKind.FalseKeyword,ts.SyntaxKind.NullKeyword].includes(node.kind)
      ||(ts.isArrayLiteralExpression(node)&&node.elements.every(literal))
      ||(ts.isObjectLiteralExpression(node)&&node.properties.every(p=>ts.isPropertyAssignment(p)&&!ts.isComputedPropertyName(p.name)&&p.name.getText(sf)!=="__proto__"&&literal(p.initializer)));
  }
  function shape(node) {
    if(ts.isStringLiteral(node)&&/^\s*(javascript|vbscript|data):/i.test(node.text))throw new Error("Unsafe URL literal");
    if(ts.isImportDeclaration(node)||ts.isExportDeclaration(node))return node.getText(sf);
    if(ts.isJsxExpression(node)) {
      if(node.expression&&!literal(node.expression))expressions.push(node.expression.getText(sf));
      return "JSX_EXPRESSION";
    }
    if(ts.isJsxAttribute(node)) {
      const name=node.name.getText(sf);
      if(/^on/i.test(name)||name==="dangerouslySetInnerHTML")attrs.push(node.getText(sf));
      if(["href","src","action"].includes(name)&&node.initializer&&ts.isStringLiteral(node.initializer)) {
        const value=node.initializer.text;
        if(!/^(https:\/\/|\/(?!\/)|#|mailto:)/.test(value))throw new Error("Unsafe URL");
      }
    }
    if(ts.isJsxSpreadAttribute(node))expressions.push(node.getText(sf));
    if(ts.isJsxOpeningElement(node)||ts.isJsxSelfClosingElement(node))tags.add(node.tagName.getText(sf));
    if(ts.isJsxElement(node)||ts.isJsxSelfClosingElement(node)||ts.isJsxFragment(node)) {
      ts.forEachChild(node,child=>{shape(child);});
      return "JSX";
    }
    if(ts.isJsxText(node))return "TEXT";
    if(ts.isStringLiteral(node)||ts.isNoSubstitutionTemplateLiteral(node))return ts.isCallExpression(node.parent)&&node.parent.expression.getText(sf)!=="siteMeta" ? node.getText(sf) : "STRING";
    if(ts.isArrayLiteralExpression(node)&&literal(node))return "DATA_ARRAY";
    if(ts.isIdentifier(node))return `ID:${node.text}`;
    const children=[];ts.forEachChild(node,c=>{children.push(shape(c));});
    return [node.kind,...children];
  }
  nodes.push(shape(sf));
  return {nodes,expressions:new Set(expressions),tags,attrs,classes,styles};
}
const before=analyze(originalPath), after=analyze(proposedPath);
if(JSON.stringify(before.nodes)!==JSON.stringify(after.nodes))throw new Error("Executable code structure changed");
for(const value of after.expressions)if(!before.expressions.has(value))throw new Error("New executable JSX expression");
for(const value of after.classes)if(!before.classes.has(value))throw new Error("Design change: reuse an existing class combination from this page");
if(JSON.stringify(before.styles)!==JSON.stringify(after.styles))throw new Error("Design change: inline styling cannot be added or changed");
const safeTags=new Set(["p","div","section","article","h1","h2","h3","h4","a","img","span","ul","ol","li","strong","em","br","time","blockquote"]);
for(const tag of after.tags)if(!before.tags.has(tag)&&!safeTags.has(tag))throw new Error("New component or unsafe element");
if(JSON.stringify(before.attrs)!==JSON.stringify(after.attrs))throw new Error("Event handlers changed");
console.log("Content-only source guard passed");
