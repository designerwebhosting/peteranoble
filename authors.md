---
image: /uploads/guggesites-header.jpg
image_alt_tag: header image
title: authors
description: All about th authors on peter.noble.co.uk.
---
{% for m in site.data.authors  %}

### {{ m.author }}    
{: id="{{ m.author | slugify }}"}

{{ m.profile }}{% endfor %}
