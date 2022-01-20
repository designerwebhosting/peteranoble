require 'json'
require 'hash-joiner'
require 'open-uri'
require 'open_uri_redirections'

module Jekyll_Get_Collection
  class Generator < Jekyll::Generator
    safe true
    priority :highest

    def generate(site)
      config = site.config['jekyll_get_collection']
      if !config
        return
      end
      if !config.kind_of?(Array)
        config = [config]
      end
      config.each do |d|
        begin
          target = site.data[d['collection']]
          source = JSON.load(open(d['json'], :allow_redirections => :safe))
          if target
            HashJoiner.deep_merge target, source
          else
            site.data[d['collection']] = source
          end
          if d['cache']
            data_source = (site.config['data_source'] || '_data')
            path = "#{data_source}/#{d['data']}.json"
            open(path, 'wb') do |file|
              file << JSON.generate(site.data[d['data']])
            end
          end
        rescue
          next
        end
      end
    end
  end
end
