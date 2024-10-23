export type ProjectFrontmatter = {
  slug: string;
  title: string;
  publishedAt: string;
  lastUpdated?: string;
  description: string;
  category?: string;
  techs: string;
  banner: string;
  link?: string;
  github?: string;
  youtube?: string;
};

export type ProjectType = {
  code: string;
  frontmatter: ProjectFrontmatter;
};

export type BlogFrontmatter = {
  wordCount: number;
  // readingTime: ReadTimeResults; TODO: instal reading time
  slug: string;
  englishOnly?: boolean;
  title: string;
  description: string;
  banner: string;
  publishedAt: string;
  lastUpdated?: string;
  tags: string;
  repost?: string;
};

export type ContentType = "blog" | "projects";

export type PickFrontmatter<T extends ContentType> = T extends "blog"
  ? BlogFrontmatter
  : ProjectFrontmatter;


export type BlogType = {
  code: string;
  frontmatter: BlogFrontmatter;
};

export type Frontmatter = ProjectFrontmatter | BlogFrontmatter;
