import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { CaseStudy, Insight, TeamMember } from './types';

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Get all files from a directory
 */
function getFilesFromDirectory(dir: string): string[] {
  const fullPath = path.join(contentDirectory, dir);
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  return fs.readdirSync(fullPath).filter(file => file.endsWith('.mdx'));
}

/**
 * Parse MDX file and return frontmatter + content
 */
function parseContentFile<T>(filePath: string): T & { content: string } {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return { ...data as T, content };
}

/**
 * Get all insights
 */
export function getAllInsights(): Insight[] {
  const files = getFilesFromDirectory('insights');
  return files.map(file => {
    const filePath = path.join(contentDirectory, 'insights', file);
    const insight = parseContentFile<Insight>(filePath);
    return {
      ...insight,
      slug: file.replace('.mdx', ''),
    };
  }).filter(insight => insight.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get insight by slug
 */
export function getInsightBySlug(slug: string): (Insight & { content: string }) | null {
  try {
    const filePath = path.join(contentDirectory, 'insights', `${slug}.mdx`);
    const insight = parseContentFile<Insight>(filePath);
    return { ...insight, slug };
  } catch {
    return null;
  }
}

/**
 * Get all case studies
 */
export function getAllCaseStudies(): CaseStudy[] {
  const files = getFilesFromDirectory('case-studies');
  return files.map(file => {
    const filePath = path.join(contentDirectory, 'case-studies', file);
    const caseStudy = parseContentFile<CaseStudy>(filePath);
    return {
      ...caseStudy,
      slug: file.replace('.mdx', ''),
    };
  }).filter(caseStudy => caseStudy.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get case study by slug
 */
export function getCaseStudyBySlug(slug: string): (CaseStudy & { content: string }) | null {
  try {
    const filePath = path.join(contentDirectory, 'case-studies', `${slug}.mdx`);
    const caseStudy = parseContentFile<CaseStudy>(filePath);
    return { ...caseStudy, slug };
  } catch {
    return null;
  }
}

/**
 * Get all team members
 */
export function getAllTeamMembers(): TeamMember[] {
  const files = getFilesFromDirectory('team');
  return files.map(file => {
    const filePath = path.join(contentDirectory, 'team', file);
    const member = parseContentFile<TeamMember>(filePath);
    return member;
  });
}

/**
 * Get filtered insights
 */
export function getFilteredInsights(filters: {
  category?: string;
  audience?: string;
  format?: string;
}): Insight[] {
  const insights = getAllInsights();
  
  return insights.filter(insight => {
    if (filters.category && insight.category !== filters.category) return false;
    if (filters.audience && insight.audience !== filters.audience && insight.audience !== 'all') return false;
    if (filters.format && insight.format !== filters.format) return false;
    return true;
  });
}
