# test-discovery-v2

```shell
% node listProjects
```
```json5
{
  projects: [
    {
      project_id: 'aa008cca-4238-4aa0-8dd2-ca791a300fad',
      type: 'document_retrieval',
      name: 'Sample Project',
      collection_count: 1
    },
    {
      project_id: '9e143dd8-1dea-44ac-a34c-36f58d3f094b',
      type: 'document_retrieval',
      name: 'Untitled project 1',
      collection_count: 2
    }
  ]
}
```

```shell
% node getProject  
```

```json5
{
  project_id: '9e143dd8-1dea-44ac-a34c-36f58d3f094b',
  type: 'document_retrieval',
  name: 'Untitled project 1',
  collection_count: 2,
  relevancy_training_status: {
    data_updated: '',
    total_examples: 0,
    sufficient_label_diversity: false,
    processing: false,
    minimum_examples_added: false,
    successfully_trained: '',
    available: false,
    notices: 0,
    minimum_queries_added: false
  },
  default_query_parameters: {
    aggregation: '[term(enriched_text.entities.text,name:entities)]',
    count: 10,
    sort: '',
    return: [],
    passages: {
      enabled: true,
      count: 10,
      fields: [Array],
      characters: 200,
      per_document: true,
      max_per_document: 1
    },
    highlight: false,
    spelling_suggestions: true,
    table_results: { enabled: false, count: 10, per_document: 0 },
    suggested_refinements: { enabled: false, count: 10 }
  }
}
```