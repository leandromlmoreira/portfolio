type Linkable = {
  live: string;
  repo?: string;
};

export const hostOf = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export const liveHost = (project: Linkable) => hostOf(project.live);

export const hasPublicCode = <T extends Linkable>(project: T): project is T & { repo: string } =>
  typeof project.repo === "string" && project.repo.length > 0;
