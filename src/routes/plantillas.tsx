import { createFileRoute } from "@tanstack/react-router";
import { TemplatesPage } from "@/components/templates-page";

export const Route = createFileRoute("/plantillas")({
  component: TemplatesPage,
});
