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
      //   const id = response.items.sys.id;

      setProjects(response.items.map((item) => item.fields));

      console.log(projects);

      //   const teste = response.items[0].fields;

      //   console.log(teste);
      //   console.log(response.items.map((item) => item.sys.id));

      //   return projects;
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
};

export default fetchProjects;
