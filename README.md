# Me

An OS-Like About me :)

## Deployment

The production URL is `https://zaroc.de`. Set `zaroc.de` as the custom domain under **Settings → Pages**. This project deploys through GitHub Actions, so a repository `CNAME` file is not required.

The public apex domain needs these four `A` records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Optionally set `www` as a `CNAME` to `zaroc-dev.github.io`. If the apex domain must resolve to a private server inside the LAN, configure `192.168.2.20` as an override in the local DNS resolver instead of publishing the private address in the authoritative public zone.
