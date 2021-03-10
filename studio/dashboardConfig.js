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
                  buildHookId: '6048ab740a47ccc519343d9d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qip2kuhb',
                  apiId: '7aeff0d1-11d1-4363-bade-414b3d1ce760'
                },
                {
                  buildHookId: '6048ab75bc2d3fc3e7b4bd9d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-btdvor37',
                  apiId: '24f9ff05-577c-449d-85c1-b40f970ec58c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/obliadp/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-btdvor37.netlify.app', category: 'apps'}
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
