import type { Project } from "../data/projects";

export type StackCount = {
  name: string;
  count: number;
};

export const countStacks = (items: Project[]): StackCount[] => {
  const counts = new Map<string, number>();
  items.forEach((project) =>
    project.stack.forEach((name) => counts.set(name, (counts.get(name) ?? 0) + 1)),
  );
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "pt-BR"));
};

export const filterByStack = (items: Project[], stack: string | null) =>
  stack ? items.filter((project) => project.stack.includes(stack)) : items;

export const projectsUsing = (items: Project[], stack: string) =>
  items.filter((project) => project.stack.includes(stack));
