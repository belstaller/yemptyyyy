# gotcha

A non-obvious pitfall or trap, learned the hard way.

## next build fails on /_global-error when NODE_ENV=development

What: `next build` (Next 16) fails prerendering /_global-error with "Cannot read properties of null (reading 'useContext')" if the shell exports NODE_ENV=development · Why: a non-production NODE_ENV during build mixes dev and prod React bundles; Next warns about a "non-standard NODE_ENV" first · Where: manager-board-mock/ · Learned: before debugging duplicate-React theories, check `echo $NODE_ENV`; build with `env -u NODE_ENV npm run build`
