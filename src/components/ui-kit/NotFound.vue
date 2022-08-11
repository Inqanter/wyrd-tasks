<template>
  <article class="notFound">
    <h1 class="notFound__title">Страница не найдена</h1>
    <p class="notFound__description">
      Может быть, когда-нибудь и в этом мире будет жизнь...
    </p>
    <router-link class="notFound__link" :to="{ name: 'tasks' }">
      Вернуться на главную
    </router-link>
  </article>
</template>

<style lang="scss">
.notFound {
  text-align: center;
}
.notFound__title {
  font-family: $font--title;
  font-size: 24px;
  margin: 0 0 20px;
}

.notFound__description {
  margin: 0 0 20px;
}

.notFound__link {
  display: inline-block;
  text-decoration: none;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--color-border-main);
  transition: $transition--primary;
}

.notFound__link:hover {
  color: var(--color-wealth);
  border-color: var(--color-wealth);
}
</style>
