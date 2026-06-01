import type { CollectionEntry } from 'astro:content';

type Member = CollectionEntry<'members'>;

export function avatarUrl(member: Member): string {
  if (member.data.avatar) return member.data.avatar;
  if (member.data.github) return `${member.data.github.replace(/\/$/, '')}.png`;
  return '';
}

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0] ?? '')
    .join('')
    .slice(0, 2)
    .toUpperCase();
}
