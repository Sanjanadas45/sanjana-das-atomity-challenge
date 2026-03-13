import { useQuery } from '@tanstack/react-query';

export const useCloudData = () => {
  return useQuery({
    queryKey: ['cloud-clusters'],
    queryFn: async () => {
      // Fetching from a public API as requested
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Failed to fetch cluster data');
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // 5 mins for cache (#3)
  });
};