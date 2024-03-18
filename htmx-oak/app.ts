import { Application, Router } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { getQuery } from "https://deno.land/x/oak@v12.5.0/helpers.ts";

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

router
.get("/login", async (ctx) => {
  ctx.request.url.pathname = "login.html";
  await ctx.send({
    root: Deno.cwd(),
  });
})
.post("/login", async(ctx) => {
  ctx.request.url.pathname = "error.html";
  await ctx.send({
    root: Deno.cwd(),
  });
})
  .get("/", async (ctx) => {
    ctx.request.url.pathname = "index.html";
    await ctx.send({
      root: Deno.cwd(),
    });
  })
  .get("/api/users", (ctx) => {
    const users = [
      {
        id: 1,
        name: "tanaka",
      },
      {
        id: 2,
        name: "suzuki",
      },
      {
        id: 3,
        name: "sasaki",
      },
      {
        id: 4,
        name: "takahashi",
      },
    ];

    // クエリパラメータ取得
    const params = getQuery(ctx);
    const search = params.search;

    // なければそのまま返す。
    if (!search) {
      ctx.response.body = users;
      return;
    }

    // クエリパラメータの値でフィルタリングして返す。
    ctx.response.body = users.filter((user) => {
      return user.name.includes(search);
    });
  });

await app.listen({ port: 8000 });
