export const generateShinjiroComment = (keyword: string): string => {
  const templates = [
    `${keyword}については、まさに${keyword}だと思います。`,
    `${keyword}を考える時、${keyword}というものを考えなければいけない。`,
    `${keyword}というのは${keyword}なんです。これは${keyword}だからです。`,
    `今、${keyword}が問題になっていますが、${keyword}こそが大事だと思う。`,
    `${keyword}問題、これは${keyword}の問題だと思っています。`,
    `${keyword}に関して言えば、${keyword}について考えていく必要がある。`,
    `${keyword}は${keyword}であり、${keyword}でもある。これが${keyword}です。`,
    `私は${keyword}について、${keyword}という観点から考えています。`,
    `${keyword}の件ですが、${keyword}をしっかりとやっていきたい。`,
    `${keyword}は大事です。なぜなら${keyword}だからです。`,
    `${keyword}。${keyword}とは何か。それは${keyword}であることだと思います。`,
    `${keyword}については、${keyword}として${keyword}していきたい。`,
    `${keyword}をやる。これに尽きると思う。それは${keyword}だからです。`,
    `${keyword}というのは、${keyword}をして${keyword}するということだと思います。`,
    `${keyword}は、${keyword}だけでなく、${keyword}でもあると思います。`,
    `${keyword}を進めるためには、${keyword}が必要です。それが${keyword}だからです。`,
    `${keyword}をどうするか。それは${keyword}をするということに他ならない。`,
    `${keyword}について言うと、${keyword}は${keyword}なんです。`,
    `${keyword}はしっかりやります。なぜならそれが${keyword}だからです。`,
    `${keyword}の課題は${keyword}です。だからこそ${keyword}が重要なんです。`,
    `${keyword}に対して、私たちは${keyword}をもって${keyword}していく。`,
    `${keyword}。この一言に尽きます。まさに${keyword}なんです。`,
    `${keyword}をどう考えるか。私は${keyword}として考えています。`,
    `${keyword}が大切。それは${keyword}が${keyword}だからです。`,
    `${keyword}をやる時はやる。やらない時はやらない。それが${keyword}です。`
  ]
  
  return templates[Math.floor(Math.random() * templates.length)]
}