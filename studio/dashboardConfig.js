export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '6009b8d9cd69c4115ea29a07',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-usw9n36v',
                  apiId: '21a10937-7216-4745-b67f-16ba59205b55'
                },
                {
                  buildHookId: '6009b8dad0c8770c51216cd1',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-sfuetqev',
                  apiId: 'e83cd99d-b6e1-452a-9aa4-2d404211dc00'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/doc22940/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-sfuetqev.netlify.app', category: 'apps'}
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
