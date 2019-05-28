FROM node:alpine AS main

COPY . /app
WORKDIR /app
RUN npm install

FROM main AS storybook-build

RUN npm run build-storybook

FROM node:8-alpine AS storybook

COPY --from=storybook-build /app/storybook-static ./storybook-static
ENTRYPOINT ["npx", "serve"]
CMD ["storybook-static"]
