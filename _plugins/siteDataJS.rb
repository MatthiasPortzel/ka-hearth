require 'json'

module Jekyll
    Jekyll::Hooks.register :site, :post_write do |site|        
        post_list = []
        
        site.posts.docs.map do |post|
            post_hash = {
                url: post.url,
                date: post.data["date"],
                slug: post.data["slug"],
                title: post.data["title"],
                excerpt: post.data["excerpt"]   
            }
            
            post_list << post_hash
        end
        
        site_data = {
            url: site.config["url"] + site.baseurl,
            title: site.config["title"],
            description: site.config["description"],
            github_url: site.config["github"]["repository_url"],
            posts: post_list
        }
        
        File.write('_site/loadSiteData.js', "handleSiteData(#{site_data.to_json(
            {
                indent: "    ",
                object_nl: "\n",
                array_nl: "\n",
                space: " "
            }
        )})");
    end
end
