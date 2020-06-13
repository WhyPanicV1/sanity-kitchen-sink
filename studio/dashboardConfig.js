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
                  buildHookId: '5ee4ff02b2863f71cfb7427c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9grjdddv',
                  apiId: 'd6b316b1-c98f-40f1-bbb3-691c377b19ae'
                },
                {
                  buildHookId: '5ee4ff026dd7c3a88889d676',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-sb1vk3qs',
                  apiId: 'ec14c9da-fbd6-4cd7-82cb-8d18a4121c7b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/WhyPanicV1/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-sb1vk3qs.netlify.app', category: 'apps'}
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
