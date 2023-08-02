import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const client = createClient({
  space: 'utuuozd9irww',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'vjDqhTfbi7T8tf8JThwlNpCJrvGMO2PrNH_n46GE6FE',
});

const fetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map(item => {
        const { title, image, url } = item.fields
        const img = image?.fields?.file?.url
        const id = item.sys.id
        return { title, url, img, id }
      })
      setProjects(projects)
      setIsLoading(false);

    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData()
  }, []);

  return { isLoading, projects }
};

export default fetchProjects;
