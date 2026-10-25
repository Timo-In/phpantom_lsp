window.BENCHMARK_DATA = {
  "lastUpdate": 1792896432656,
  "repoUrl": "https://github.com/Timo-In/phpantom_lsp",
  "entries": {
    "PHPantom Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "committer": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "distinct": true,
          "id": "b9cc3e760feb4e6ba6c97886999a6fce6e6f98e5",
          "message": "Improve symfony testing",
          "timestamp": "2026-10-25T02:53:40+02:00",
          "tree_id": "978fdcf68ac61117d531b864dd8e74d76511c3f8",
          "url": "https://github.com/Timo-In/phpantom_lsp/commit/b9cc3e760feb4e6ba6c97886999a6fce6e6f98e5"
        },
        "date": 1792896432085,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.748,
            "range": "± 0.249",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.045,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.134,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.19,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.293,
            "range": "± 0.015",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.407,
            "range": "± 0.021",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.575,
            "range": "± 0.043",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 3.251,
            "range": "± 0.091",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.152,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.059,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.053,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.075,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 5.418,
            "range": "± 0.056",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.162,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.354,
            "range": "± 0.026",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.086,
            "range": "± 0.010",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.05,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.13,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.085,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.08,
            "range": "± 0.010",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.235,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.109,
            "range": "± 0.034",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.438,
            "range": "± 0.222",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.115,
            "range": "± 0.024",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 1.053,
            "range": "± 0.053",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.35,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 8.134,
            "range": "± 0.390",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 0.839,
            "range": "± 0.024",
            "unit": "ms"
          },
          {
            "name": "custom_builder_completion/custom_builder_deep_inheritance",
            "value": 0.107,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "laravel_completion/model_where_prefix",
            "value": 0.091,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "laravel_completion/model_typing_sequence",
            "value": 0.344,
            "range": "± 0.031",
            "unit": "ms"
          },
          {
            "name": "laravel_morph_column_completion/cold_confirmation/1",
            "value": 0.093,
            "range": "± 0.013",
            "unit": "ms"
          },
          {
            "name": "laravel_morph_column_completion/cached_request/1",
            "value": 0.055,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "laravel_morph_column_completion/cold_confirmation/128",
            "value": 0.162,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "laravel_morph_column_completion/cached_request/128",
            "value": 0.077,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "find_references/hierarchy_scan/50",
            "value": 0.349,
            "range": "± 0.023",
            "unit": "ms"
          },
          {
            "name": "find_references/hierarchy_scan/150",
            "value": 0.445,
            "range": "± 0.010",
            "unit": "ms"
          },
          {
            "name": "symfony_completion/service_id_php",
            "value": 0.312,
            "range": "± 0.015",
            "unit": "ms"
          },
          {
            "name": "symfony_completion/translation_key_php",
            "value": 0.659,
            "range": "± 0.013",
            "unit": "ms"
          },
          {
            "name": "symfony_completion/route_name_php",
            "value": 0.335,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "symfony_completion/template_name_php",
            "value": 0.302,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "symfony_completion/route_name_twig",
            "value": 0.212,
            "range": "± 0.019",
            "unit": "ms"
          }
        ]
      }
    ]
  }
}