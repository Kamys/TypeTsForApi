import { AxiosWrapper } from './AxiosWrapper';

function loading(id: string) {
  return AxiosWrapper.get(`/posts/${id}`)
}

export const PostsApi = {
  loading,
};