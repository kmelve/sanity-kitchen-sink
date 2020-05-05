export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb1bbd86ef4386a3ff6a956',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zgphr7ug',
                  apiId: '973e9746-6ba1-4f68-8647-bc1337768365'
                },
                {
                  buildHookId: '5eb1bbd8f08678cb890cffcd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-zzvbc6ae',
                  apiId: '9713be28-b454-4a62-952d-fb2221bf4a20'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kmelve/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-zzvbc6ae.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
