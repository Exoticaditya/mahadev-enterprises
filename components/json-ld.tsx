type SchemaValue = Record<string, unknown> | Record<string, unknown>[];

export function JsonLd({ data }: { data: SchemaValue }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}