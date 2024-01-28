import type { Endpoints } from "@octokit/types";

export type OrgMember =
  Endpoints["GET /orgs/{org}/public_members"]["response"]["data"][number];

export type GitHubUser = Pick<OrgMember, "avatar_url" | "login" | "html_url">;
