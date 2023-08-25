const config = useRuntimeConfig();
export default defineEventHandler((event) => {
 return {
  hello: config.apiSecret,
 };
});
