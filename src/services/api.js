import { stringify } from 'qs';
import request from '../utils/request';
import { getOrigin } from './config'


/**
 * 删除文章
 * url: xxx
 * @returns {Promise<void>}
 */
export async function test(params = {}) {
  return request(getOrigin(`/admin/app-article/deleteAppArticle`), {
    method: 'POST',
    body: {
      ...params,
    },
  });
}
