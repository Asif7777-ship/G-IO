// generated from test/fixtures/tap-react15-collision-legacy-sw
module.exports = t => {
  const path = t.testdir({
  "package-lock.json": JSON.stringify({
    "name": "tap-14.7-react-15-peerdep-collision",
    "version": "1.2.3",
    "lockfileVersion": 1,
    "requires": true,
    "dependencies": {
      "@babel/code-frame": {
        "version": "7.5.5",
        "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.5.5.tgz",
        "integrity": "sha512-27d4lZoomVyo51VegxI20xZPuSHusqbQag/ztrBC7wegWoQ1nLREPVSKSW8byhTlzTKyNE4ifaTA6lCp7JjpFw==",
        "dev": true,
        "requires": {
          "@babel/highlight": "^7.0.0"
        }
      },
      "@babel/core": {
        "version": "7.7.7",
        "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.7.7.tgz",
        "integrity": "sha512-jlSjuj/7z138NLZALxVgrx13AOtqip42ATZP7+kYl53GvDV6+4dCek1mVUo8z8c8Xnw/mx2q3d9HWh3griuesQ==",
        "dev": true,
        "requires": {
          "@babel/code-frame": "^7.5.5",
          "@babel/generator": "^7.7.7",
          "@babel/helpers": "^7.7.4",
          "@babel/parser": "^7.7.7",
          "@babel/template": "^7.7.4",
          "@babel/traverse": "^7.7.4",
          "@babel/types": "^7.7.4",
          "convert-source-map": "^1.7.0",
          "debug": "^4.1.0",
          "json5": "^2.1.0",
          "lodash": "^4.17.13",
          "resolve": "^1.3.2",
          "semver": "^5.4.1",
          "source-map": "^0.5.0"
        },
        "dependencies": {
          "source-map": {
            "version": "0.5.7",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
            "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
            "dev": true
          }
        }
      },
      "@babel/generator": {
        "version": "7.7.7",
        "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.7.7.tgz",
        "integrity": "sha512-/AOIBpHh/JU1l0ZFS4kiRCBnLi6OTHzh0RPk3h9isBxkkqELtQNFi1Vr/tiG9p1yfoUdKVwISuXWQR+hwwM4VQ==",
        "dev": true,
        "requires": {
          "@babel/types": "^7.7.4",
          "jsesc": "^2.5.1",
          "lodash": "^4.17.13",
          "source-map": "^0.5.0"
        },
        "dependencies": {
          "source-map": {
            "version": "0.5.7",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
            "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
            "dev": true
          }
        }
      },
      "@babel/helper-builder-react-jsx": {
        "version": "7.7.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-builder-react-jsx/-/helper-builder-react-jsx-7.7.4.tgz",
        "integrity": "sha512-kvbfHJNN9dg4rkEM4xn1s8d1/h6TYNvajy9L1wx4qLn9HFg0IkTsQi4rfBe92nxrPUFcMsHoMV+8rU7MJb3fCA==",
        "dev": true,
        "requires": {
          "@babel/types": "^7.7.4",
          "esutils": "^2.0.0"
        }
      },
      "@babel/helper-function-name": {
        "version": "7.7.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.7.4.tgz",
        "integrity": "sha512-AnkGIdiBhEuiwdoMnKm7jfPfqItZhgRaZfMg1XX3bS25INOnLPjPG1Ppnajh8eqgt5kPJnfqrRHqFqmjKDZLzQ==",
        "dev": true,
        "requires": {
          "@babel/helper-get-function-arity": "^7.7.4",
          "@babel/template": "^7.7.4",
          "@babel/types": "^7.7.4"
        }
      },
      "@babel/helper-get-function-arity": {
        "version": "7.7.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.7.4.tgz",
        "integrity": "sha512-QTGKEdCkjgzgfJ3bAyRwF4yyT3pg+vDgan8DSivq1eS0gwi+KGKE5x8kRcbeFTb/673mkO5SN1IZfmCfA5o+EA==",
        "dev": true,
        "requires": {
          "@babel/types": "^7.7.4"
        }
      },
      "@babel/helper-plugin-utils": {
        "version": "7.0.0",
        "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.0.0.tgz",
        "integrity": "sha512-CYAOUCARwExnEixLdB6sDm2dIJ/YgEAKDM1MOeMeZu9Ld/bDgVo8aiWrXwcY7OBh+1Ea2uUcVRcxKk0GJvW7QA==",
        "dev": true
      },
      "@babel/helper-split-export-declaration": {
        "version": "7.7.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.7.4.tgz",
        "integrity": "sha512-guAg1SXFcVr04Guk9eq0S4/rWS++sbmyqosJzVs8+1fH5NI+ZcmkaSkc7dmtAFbHFva6yRJnjW3yAcGxjueDug==",
        "dev": true,
        "requires": {
          "@babel/types": "^7.7.4"
        }
      },
      "@babel/helpers": {
        "version": "7.7.4",
        "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.7.4.tgz",
        "integrity": "sha512-ak5NGZGJ6LV85Q1Zc9gn2n+ayXOizryhjSUBTdu5ih1tlVCJeuQENzc4ItyCVhINVXvIT/ZQ4mheGIsfBkpskg==",
        "dev": true,
        "requires": {
          "@babel/template": "^7.7.4",
          "@babel/traverse": "^7.7.4",
          "@babel/types": "^7.7.4"
        }
      },
      "@babel/highlight": {
        "version": "7.5.0",
        "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.5.0.tgz",
        "integrity": "sha512-7dV4eu9gBxoM0dAnj/BCFDW9LFU0zvTrkq0ugM7pnHEgguOEeOz1so2ZghEdzviYzQEED0r4EAgpsBChKy1TRQ==",
        "dev": true,
        "requires": {
          "chalk": "^2.0.0",
          "esutils": "^2.0.2",
          "js-tokens": "^4.0.0"
        }
      },
      "@babel/parser": {
        "version": "7.7.7",
        "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.7.7.tgz",
        "integrity": "sha512-WtTZMZAZLbeymhkd/sEaPD8IQyGAhmuTuvTzLiCFM7iXiVdY0gc0IaI+cW0fh1BnSMbJSzXX6/fHllgHKwHhXw==",
        "dev": true
      },
      "@babel/plugin-proposal-object-rest-spread": {
        "version": "7.7.7",
        "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.7.7.tgz",
        "integrity": "sha512-3qp9I8lelgzNedI3hrhkvhaEYree6+WHnyA/q4Dza9z7iEIs1eyhWyJnetk3jJ69RT0AT4G0UhEGwyGFJ7GUuQ==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.0.0",
          "@babel/plugin-syntax-object-rest-spread": "^7.7.4"
        }
      },
      "@babel/plugin-syntax-jsx": {
        "version": "7.7.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.7.4.tgz",
        "integrity": "sha512-wuy6fiMe9y7HeZBWXYCGt2RGxZOj0BImZ9EyXJVnVGBKO/Br592rbR3rtIQn0eQhAk9vqaKP5n8tVqEFBQMfLg==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.0.0"
        }
      },
      "@babel/plugin-syntax-object-rest-spread": {
        "version": "7.7.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.7.4.tgz",
        "integrity": "sha512-mObR+r+KZq0XhRVS2BrBKBpr5jqrqzlPvS9C9vuOf5ilSwzloAl7RPWLrgKdWS6IreaVrjHxTjtyqFiOisaCwg==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.0.0"
        }
      },
      "@babel/plugin-transform-destructuring": {
        "version": "7.7.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.7.4.tgz",
        "integrity": "sha512-4jFMXI1Cu2aXbcXXl8Lr6YubCn6Oc7k9lLsu8v61TZh+1jny2BWmdtvY9zSUlLdGUvcy9DMAWyZEOqjsbeg/wA==",
        "dev": true,
        "requires": {
          "@babel/helper-plugin-utils": "^7.0.0"
        }
      },
      "@babel/plugin-transform-react-jsx": {
        "version": "7.7.7",
        "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx-7.7.7.tgz",
        "integrity": "sha512-SlPjWPbva2+7/ZJbGcoqjl4LsQaLpKEzxW9hcxU7675s24JmdotJOSJ4cgAbV82W3FcZpHIGmRZIlUL8ayMvjw==",
        "dev": true,
        "requires": {
          "@babel/helper-builder-react-jsx": "^7.7.4",
          "@babel/helper-plugin-utils": "^7.0.0",
          "@babel/plugin-syntax-jsx": "^7.7.4"
        }
      },
      "@babel/runtime": {
        "version": "7.7.7",
        "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.7.7.tgz",
        "integrity": "sha512-uCnC2JEVAu8AKB5do1WRIsvrdJ0flYx/A/9f/6chdacnEZ7LmavjdsDXr5ksYBegxtuTPR5Va9/+13QF/kFkCA==",
        "dev": true,
        "requires": {
          "regenerator-runtime": "^0.13.2"
        }
      },
      "@babel/template": {
        "version": "7.7.4",
        "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.7.4.tgz",
        "integrity": "sha512-qUzihgVPguAzXCK7WXw8pqs6cEwi54s3E+HrejlkuWO6ivMKx9hZl3Y2fSXp9i5HgyWmj7RKP+ulaYnKM4yYxw==",
        "dev": true,
        "requires": {
          "@babel/code-frame": "^7.0.0",
          "@babel/parser": "^7.7.4",
          "@babel/types": "^7.7.4"
        }
      },
      "@babel/traverse": {
        "version": "7.7.4",
        "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.7.4.tgz",
        "integrity": "sha512-P1L58hQyupn8+ezVA2z5KBm4/Zr4lCC8dwKCMYzsa5jFMDMQAzaBNy9W5VjB+KAmBjb40U7a/H6ao+Xo+9saIw==",
        "dev": true,
        "requires": {
          "@babel/code-frame": "^7.5.5",
          "@babel/generator": "^7.7.4",
          "@babel/helper-function-name": "^7.7.4",
          "@babel/helper-split-export-declaration": "^7.7.4",
          "@babel/parser": "^7.7.4",
          "@babel/types": "^7.7.4",
          "debug": "^4.1.0",
          "globals": "^11.1.0",
          "lodash": "^4.17.13"
        }
      },
      "@babel/types": {
        "version": "7.7.4",
        "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.7.4.tgz",
        "integrity": "sha512-cz5Ji23KCi4T+YIE/BolWosrJuSmoZeN1EFnRtBwF+KKLi8GG/Z2c2hOJJeCXPk4mwk4QFvTmwIodJowXgttRA==",
        "dev": true,
        "requires": {
          "esutils": "^2.0.2",
          "lodash": "^4.17.13",
          "to-fast-properties": "^2.0.0"
        }
      },
      "@types/color-name": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/@types/color-name/-/color-name-1.1.1.tgz",
        "integrity": "sha512-rr+OQyAjxze7GgWrSaJwydHStIhHq2lvY3BOC2Mj7KnzI7XK0Uw1TOOdI9lDoajEbSWLiYgoo4f1R51erQfhPQ==",
        "dev": true
      },
      "ajv": {
        "version": "6.10.2",
        "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.10.2.tgz",
        "integrity": "sha512-TXtUUEYHuaTEbLZWIKUr5pmBuhDLy+8KYtPYdcV8qC+pOZL+NKqYwvWSRrVXHn+ZmRRAu8vJTAznH7Oag6RVRw==",
        "dev": true,
        "requires": {
          "fast-deep-equal": "^2.0.1",
          "fast-json-stable-stringify": "^2.0.0",
          "json-schema-traverse": "^0.4.1",
          "uri-js": "^4.2.2"
        }
      },
      "ansi-escapes": {
        "version": "4.3.0",
        "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.0.tgz",
        "integrity": "sha512-EiYhwo0v255HUL6eDyuLrXEkTi7WwVCLAw+SeOQ7M7qdun1z1pum4DEm/nuqIVbPvi9RPPc9k9LbyBv6H0DwVg==",
        "dev": true,
        "requires": {
          "type-fest": "^0.8.1"
        }
      },
      "ansi-regex": {
        "version": "5.0.0",
        "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
        "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
        "dev": true
      },
      "ansi-styles": {
        "version": "3.2.1",
        "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
        "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
        "dev": true,
        "requires": {
          "color-convert": "^1.9.0"
        }
      },
      "ansicolors": {
        "version": "0.3.2",
        "resolved": "https://registry.npmjs.org/ansicolors/-/ansicolors-0.3.2.tgz",
        "integrity": "sha1-ZlWX3oap/+Oqm/vmyuXG6kJrSXk=",
        "dev": true
      },
      "anymatch": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.1.tgz",
        "integrity": "sha512-mM8522psRCqzV+6LhomX5wgp25YVibjh8Wj23I5RPkPppSVSjyKD2A2mBJmWGa+KN7f2D6LNh9jkBCeyLktzjg==",
        "dev": true,
        "requires": {
          "normalize-path": "^3.0.0",
          "picomatch": "^2.0.4"
        }
      },
      "append-transform": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/append-transform/-/append-transform-1.0.0.tgz",
        "integrity": "sha512-P009oYkeHyU742iSZJzZZywj4QRJdnTWffaKuJQLablCZ1uz6/cW4yaRgcDaoQ+uwOxxnt0gRUcwfsNP2ri0gw==",
        "dev": true,
        "requires": {
          "default-require-extensions": "^2.0.0"
        }
      },
      "archy": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/archy/-/archy-1.0.0.tgz",
        "integrity": "sha1-+cjBN1fMHde8N5rHeyxipcKGjEA=",
        "dev": true
      },
      "arg": {
        "version": "4.1.2",
        "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.2.tgz",
        "integrity": "sha512-+ytCkGcBtHZ3V2r2Z06AncYO8jz46UEamcspGoU8lHcEbpn6J77QK0vdWvChsclg/tM5XIJC5tnjmPp7Eq6Obg==",
        "dev": true
      },
      "argparse": {
        "version": "1.0.10",
        "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
        "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
        "dev": true,
        "requires": {
          "sprintf-js": "~1.0.2"
        }
      },
      "arrify": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/arrify/-/arrify-2.0.1.tgz",
        "integrity": "sha512-3duEwti880xqi4eAMN8AyR4a0ByT90zoYdLlevfrvU43vb0YZwZVfxOgxWrLXXXpyugL0hNZc9G6BiB5B3nUug==",
        "dev": true
      },
      "asap": {
        "version": "2.0.6",
        "resolved": "https://registry.npmjs.org/asap/-/asap-2.0.6.tgz",
        "integrity": "sha1-5QNHYR1+aQlDIIu9r+vLwvuGbUY="
      },
      "asn1": {
        "version": "0.2.4",
        "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
        "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
        "dev": true,
        "requires": {
          "safer-buffer": "~2.1.0"
        }
      },
      "assert-plus": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
        "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU=",
        "dev": true
      },
      "astral-regex": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-2.0.0.tgz",
        "integrity": "sha512-Z7tMw1ytTXt5jqMcOP+OQteU1VuNK9Y02uuJtKQ1Sv69jXQKKg5cibLwGJow8yzZP+eAc18EmLGPal0bp36rvQ==",
        "dev": true
      },
      "async-hook-domain": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/async-hook-domain/-/async-hook-domain-1.1.3.tgz",
        "integrity": "sha512-ZovMxSbADV3+biB7oR1GL5lGyptI24alp0LWHlmz1OFc5oL47pz3EiIF6nXOkDW7yLqih4NtsiYduzdDW0i+Wg==",
        "dev": true,
        "requires": {
          "source-map-support": "^0.5.11"
        }
      },
      "asynckit": {
        "version": "0.4.0",
        "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
        "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k=",
        "dev": true
      },
      "auto-bind": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/auto-bind/-/auto-bind-3.0.0.tgz",
        "integrity": "sha512-v0A231a/lfOo6kxQtmEkdBfTApvC21aJYukA8pkKnoTvVqh3Wmm7/Rwy4GBCHTTHVoLVA5qsBDDvf1XY1nIV2g==",
        "dev": true
      },
      "aws-sign2": {
        "version": "0.7.0",
        "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
        "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg=",
        "dev": true
      },
      "aws4": {
        "version": "1.9.0",
        "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.9.0.tgz",
        "integrity": "sha512-Uvq6hVe90D0B2WEnUqtdgY1bATGz3mw33nH9Y+dmA+w5DHvUmBgkr5rM/KCHpCsiFNRUfokW/szpPPgMK2hm4A==",
        "dev": true
      },
      "balanced-match": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
        "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",
        "dev": true
      },
      "bcrypt-pbkdf": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
        "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
        "dev": true,
        "requires": {
          "tweetnacl": "^0.14.3"
        }
      },
      "binary-extensions": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.0.0.tgz",
        "integrity": "sha512-Phlt0plgpIIBOGTT/ehfFnbNlfsDEiqmzE2KRXoX1bLIlir4X/MR+zSyBEkL05ffWgnRSf/DXv+WrUAVr93/ow==",
        "dev": true
      },
      "bind-obj-methods": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/bind-obj-methods/-/bind-obj-methods-2.0.0.tgz",
        "integrity": "sha512-3/qRXczDi2Cdbz6jE+W3IflJOutRVica8frpBn14de1mBOkzDo+6tY33kNhvkw54Kn3PzRRD2VnGbGPcTAk4sw==",
        "dev": true
      },
      "brace-expansion": {
        "version": "1.1.11",
        "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
        "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
        "dev": true,
        "requires": {
          "balanced-match": "^1.0.0",
          "concat-map": "0.0.1"
        }
      },
      "braces": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
        "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
        "dev": true,
        "requires": {
          "fill-range": "^7.0.1"
        }
      },
      "browser-process-hrtime": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz",
        "integrity": "sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow==",
        "dev": true
      },
      "buffer-from": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
        "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A==",
        "dev": true
      },
      "caching-transform": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/caching-transform/-/caching-transform-3.0.2.tgz",
        "integrity": "sha512-Mtgcv3lh3U0zRii/6qVgQODdPA4G3zhG+jtbCWj39RXuUFTMzH0vcdMtaJS1jPowd+It2Pqr6y3NJMQqOqCE2w==",
        "dev": true,
        "requires": {
          "hasha": "^3.0.0",
          "make-dir": "^2.0.0",
          "package-hash": "^3.0.0",
          "write-file-atomic": "^2.4.2"
        },
        "dependencies": {
          "write-file-atomic": {
            "version": "2.4.3",
            "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-2.4.3.tgz",
            "integrity": "sha512-GaETH5wwsX+GcnzhPgKcKjJ6M2Cq3/iZp1WyY/X1CSqrW+jVNM9Y7D8EC2sM4ZG/V8wZlSniJnCKWPmBYAucRQ==",
            "dev": true,
            "requires": {
              "graceful-fs": "^4.1.11",
              "imurmurhash": "^0.1.4",
              "signal-exit": "^3.0.2"
            }
          }
        }
      },
      "caller-callsite": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/caller-callsite/-/caller-callsite-2.0.0.tgz",
        "integrity": "sha1-hH4PzgoiN1CpoCfFSzNzGtMVQTQ=",
        "dev": true,
        "requires": {
          "callsites": "^2.0.0"
        }
      },
      "caller-path": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/caller-path/-/caller-path-2.0.0.tgz",
        "integrity": "sha1-Ro+DBE42mrIBD6xfBs7uFbsssfQ=",
        "dev": true,
        "requires": {
          "caller-callsite": "^2.0.0"
        }
      },
      "callsites": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/callsites/-/callsites-2.0.0.tgz",
        "integrity": "sha1-BuuE8A7qQT2oav/vrL/7Ngk7PFA=",
        "dev": true
      },
      "camelcase": {
        "version": "5.3.1",
        "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
        "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
        "dev": true
      },
      "cardinal": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/cardinal/-/cardinal-2.1.1.tgz",
        "integrity": "sha1-fMEFXYItISlU0HsIXeolHMe8VQU=",
        "dev": true,
        "requires": {
          "ansicolors": "~0.3.2",
          "redeyed": "~2.1.0"
        }
      },
      "caseless": {
        "version": "0.12.0",
        "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
        "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw=",
        "dev": true
      },
      "chalk": {
        "version": "2.4.2",
        "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
        "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
        "dev": true,
        "requires": {
          "ansi-styles": "^3.2.1",
          "escape-string-regexp": "^1.0.5",
          "supports-color": "^5.3.0"
        }
      },
      "chokidar": {
        "version": "3.3.1",
        "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.3.1.tgz",
        "integrity": "sha512-4QYCEWOcK3OJrxwvyyAOxFuhpvOVCYkr33LPfFNBjAD/w3sEzWsp2BUOkI4l9bHvWioAd0rc6NlHUOEaWkTeqg==",
        "dev": true,
        "requires": {
          "anymatch": "~3.1.1",
          "braces": "~3.0.2",
          "fsevents": "~2.1.2",
          "glob-parent": "~5.1.0",
          "is-binary-path": "~2.1.0",
          "is-glob": "~4.0.1",
          "normalize-path": "~3.0.0",
          "readdirp": "~3.3.0"
        }
      },
      "ci-info": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
        "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ==",
        "dev": true
      },
      "cli-cursor": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
        "integrity": "sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==",
        "dev": true,
        "requires": {
          "restore-cursor": "^3.1.0"
        }
      },
      "cli-truncate": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/cli-truncate/-/cli-truncate-2.1.0.tgz",
        "integrity": "sha512-n8fOixwDD6b/ObinzTrp1ZKFzbgvKZvuz/TvejnLn1aQfC6r52XEx85FmuC+3HI+JM7coBRXUvNqEU2PHVrHpg==",
        "dev": true,
        "requires": {
          "slice-ansi": "^3.0.0",
          "string-width": "^4.2.0"
        }
      },
      "cliui": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/cliui/-/cliui-4.1.0.tgz",
        "integrity": "sha512-4FG+RSG9DL7uEwRUZXZn3SS34DiDPfzP0VOiEwtUWlE+AR2EIg+hSyvrIgUUfhdgR/UkAeW2QHgeP+hWrXs7jQ==",
        "dev": true,
        "requires": {
          "string-width": "^2.1.1",
          "strip-ansi": "^4.0.0",
          "wrap-ansi": "^2.0.0"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
            "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
            "dev": true
          },
          "is-fullwidth-code-point": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
            "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
            "dev": true
          },
          "string-width": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
            "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
            "dev": true,
            "requires": {
              "is-fullwidth-code-point": "^2.0.0",
              "strip-ansi": "^4.0.0"
            }
          },
          "strip-ansi": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
            "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
            "dev": true,
            "requires": {
              "ansi-regex": "^3.0.0"
            }
          },
          "wrap-ansi": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-2.1.0.tgz",
            "integrity": "sha1-2Pw9KE3QV5T+hJc8rs3Rz4JP3YU=",
            "dev": true,
            "requires": {
              "string-width": "^1.0.1",
              "strip-ansi": "^3.0.1"
            },
            "dependencies": {
              "ansi-regex": {
                "version": "2.1.1",
                "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
                "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
                "dev": true
              },
              "is-fullwidth-code-point": {
                "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
                "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
                "dev": true,
                "requires": {
                  "number-is-nan": "^1.0.0"
                }
              },
              "string-width": {
                "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
                "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
                "dev": true,
                "requires": {
                  "code-point-at": "^1.0.0",
                  "is-fullwidth-code-point": "^1.0.0",
                  "strip-ansi": "^3.0.0"
                }
              },
              "strip-ansi": {
                "version": "3.0.1",
                "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
                "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
                "dev": true,
                "requires": {
                  "ansi-regex": "^2.0.0"
                }
              }
            }
          }
        }
      },
      "code-point-at": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
        "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c=",
        "dev": true
      },
      "color-convert": {
        "version": "1.9.3",
        "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
        "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
        "dev": true,
        "requires": {
          "color-name": "1.1.3"
        }
      },
      "color-name": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
        "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
        "dev": true
      },
      "color-support": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/color-support/-/color-support-1.1.3.tgz",
        "integrity": "sha512-qiBjkpbMLO/HL68y+lh4q0/O1MZFj2RX6X/KmMa3+gJD3z+WwI1ZzDHysvqHGS3mP6mznPckpXmw1nI9cJjyRg==",
        "dev": true
      },
      "combined-stream": {
        "version": "1.0.8",
        "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
        "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
        "dev": true,
        "requires": {
          "delayed-stream": "~1.0.0"
        }
      },
      "commander": {
        "version": "2.20.3",
        "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
        "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
        "dev": true,
        "optional": true
      },
      "commondir": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
        "integrity": "sha1-3dgA2gxmEnOTzKWVDqloo6rxJTs=",
        "dev": true
      },
      "concat-map": {
        "version": "0.0.1",
        "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
        "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
        "dev": true
      },
      "convert-source-map": {
        "version": "1.7.0",
        "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.7.0.tgz",
        "integrity": "sha512-4FJkXzKXEDB1snCFZlLP4gpC3JILicCpGbzG9f9G7tGqGCzETQ2hWPrcinA9oU4wtf2biUaEH5065UnMeR33oA==",
        "dev": true,
        "requires": {
          "safe-buffer": "~5.1.1"
        },
        "dependencies": {
          "safe-buffer": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
            "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
            "dev": true
          }
        }
      },
      "core-js": {
        "version": "1.2.7",
        "resolved": "https://registry.npmjs.org/core-js/-/core-js-1.2.7.tgz",
        "integrity": "sha1-ZSKUwUZR2yj6k70tX/KYOk8IxjY="
      },
      "core-util-is": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
        "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac=",
        "dev": true
      },
      "coveralls": {
        "version": "3.0.9",
        "resolved": "https://registry.npmjs.org/coveralls/-/coveralls-3.0.9.tgz",
        "integrity": "sha512-nNBg3B1+4iDox5A5zqHKzUTiwl2ey4k2o0NEcVZYvl+GOSJdKBj4AJGKLv6h3SvWch7tABHePAQOSZWM9E2hMg==",
        "dev": true,
        "requires": {
          "js-yaml": "^3.13.1",
          "lcov-parse": "^1.0.0",
          "log-driver": "^1.2.7",
          "minimist": "^1.2.0",
          "request": "^2.88.0"
        }
      },
      "cp-file": {
        "version": "6.2.0",
        "resolved": "https://registry.npmjs.org/cp-file/-/cp-file-6.2.0.tgz",
        "integrity": "sha512-fmvV4caBnofhPe8kOcitBwSn2f39QLjnAnGq3gO9dfd75mUytzKNZB1hde6QHunW2Rt+OwuBOMc3i1tNElbszA==",
        "dev": true,
        "requires": {
          "graceful-fs": "^4.1.2",
          "make-dir": "^2.0.0",
          "nested-error-stacks": "^2.0.0",
          "pify": "^4.0.1",
          "safe-buffer": "^5.0.1"
        }
      },
      "create-react-class": {
        "version": "15.6.3",
        "resolved": "https://registry.npmjs.org/create-react-class/-/create-react-class-15.6.3.tgz",
        "integrity": "sha512-M+/3Q6E6DLO6Yx3OwrWjwHBnvfXXYA7W+dFjt/ZDBemHO1DDZhsalX/NUtnTYclN6GfnBDRh4qRHjcDHmlJBJg==",
        "requires": {
          "fbjs": "^0.8.9",
          "loose-envify": "^1.3.1",
          "object-assign": "^4.1.1"
        }
      },
      "cross-spawn": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-4.0.2.tgz",
        "integrity": "sha1-e5JHYhwjrf3ThWAEqCPL45dCTUE=",
        "dev": true,
        "requires": {
          "lru-cache": "^4.0.1",
          "which": "^1.2.9"
        },
        "dependencies": {
          "which": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
            "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
            "dev": true,
            "requires": {
              "isexe": "^2.0.0"
            }
          }
        }
      },
      "dashdash": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
        "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
        "dev": true,
        "requires": {
          "assert-plus": "^1.0.0"
        }
      },
      "debug": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
        "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
        "dev": true,
        "requires": {
          "ms": "^2.1.1"
        }
      },
      "decamelize": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
        "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",
        "dev": true
      },
      "default-require-extensions": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/default-require-extensions/-/default-require-extensions-2.0.0.tgz",
        "integrity": "sha1-9fj7sYp9bVCyH2QfZJ67Uiz+JPc=",
        "dev": true,
        "requires": {
          "strip-bom": "^3.0.0"
        }
      },
      "delayed-stream": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
        "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk=",
        "dev": true
      },
      "diff": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.1.tgz",
        "integrity": "sha512-s2+XdvhPCOF01LRQBC8hf4vhbVmI2CGS5aZnxLJlT5FtdhPCDFq80q++zK2KlrVorVDdL5BOGZ/VfLrVtYNF+Q==",
        "dev": true
      },
      "diff-frag": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/diff-frag/-/diff-frag-1.0.1.tgz",
        "integrity": "sha512-6/v2PC/6UTGcWPPetb9acL8foberUg/CtPdALeJUdD1B/weHNvzftoo00gYznqHGRhHEbykUGzqfG9RWOSr5yw==",
        "dev": true
      },
      "ecc-jsbn": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
        "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
        "dev": true,
        "requires": {
          "jsbn": "~0.1.0",
          "safer-buffer": "^2.1.0"
        }
      },
      "emoji-regex": {
        "version": "8.0.0",
        "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
        "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
        "dev": true
      },
      "encoding": {
        "version": "0.1.12",
        "resolved": "https://registry.npmjs.org/encoding/-/encoding-0.1.12.tgz",
        "integrity": "sha1-U4tm8+5izRq1HsMjgp0flIDHS+s=",
        "requires": {
          "iconv-lite": "~0.4.13"
        }
      },
      "error-ex": {
        "version": "1.3.2",
        "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
        "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
        "dev": true,
        "requires": {
          "is-arrayish": "^0.2.1"
        }
      },
      "es6-error": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/es6-error/-/es6-error-4.1.1.tgz",
        "integrity": "sha512-Um/+FxMr9CISWh0bi5Zv0iOD+4cFh5qLeks1qhAopKVAJw3drgKbKySikp7wGhDL0HPeaja0P5ULZrxLkniUVg==",
        "dev": true
      },
      "escape-string-regexp": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
        "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
        "dev": true
      },
      "esm": {
        "version": "3.2.25",
        "resolved": "https://registry.npmjs.org/esm/-/esm-3.2.25.tgz",
        "integrity": "sha512-U1suiZ2oDVWv4zPO56S0NcR5QriEahGtdN2OR6FiOG4WJvcjBVFB0qI4+eKoWFH483PKGuLuu6V8Z4T5g63UVA==",
        "dev": true
      },
      "esprima": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
        "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
        "dev": true
      },
      "esutils": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
        "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
        "dev": true
      },
      "events-to-array": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/events-to-array/-/events-to-array-1.1.2.tgz",
        "integrity": "sha1-LUH1Y+H+QA7Uli/hpNXGp1Od9/Y=",
        "dev": true
      },
      "extend": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
        "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
        "dev": true
      },
      "extsprintf": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
        "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU=",
        "dev": true
      },
      "fast-deep-equal": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
        "integrity": "sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk=",
        "dev": true
      },
      "fast-json-stable-stringify": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
        "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
        "dev": true
      },
      "fbjs": {
        "version": "0.8.17",
        "resolved": "https://registry.npmjs.org/fbjs/-/fbjs-0.8.17.tgz",
        "integrity": "sha1-xNWY6taUkRJlPWWIsBpc3Nn5D90=",
        "requires": {
          "core-js": "^1.0.0",
          "isomorphic-fetch": "^2.1.1",
          "loose-envify": "^1.0.0",
          "object-assign": "^4.1.0",
          "promise": "^7.1.1",
          "setimmediate": "^1.0.5",
          "ua-parser-js": "^0.7.18"
        }
      },
      "fill-range": {
        "version": "7.0.1",
        "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
        "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
        "dev": true,
        "requires": {
          "to-regex-range": "^5.0.1"
        }
      },
      "find-cache-dir": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-2.1.0.tgz",
        "integrity": "sha512-Tq6PixE0w/VMFfCgbONnkiQIVol/JJL7nRMi20fqzA4NRs9AfeqMGeRdPi3wIhYkxjeBaWh2rxwapn5Tu3IqOQ==",
        "dev": true,
        "requires": {
          "commondir": "^1.0.1",
          "make-dir": "^2.0.0",
          "pkg-dir": "^3.0.0"
        }
      },
      "find-up": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
        "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
        "dev": true,
        "requires": {
          "locate-path": "^3.0.0"
        }
      },
      "findit": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/findit/-/findit-2.0.0.tgz",
        "integrity": "sha1-ZQnwEmr0wXhVHPqZOU4DLhOk1W4=",
        "dev": true
      },
      "flow-parser": {
        "version": "0.114.0",
        "resolved": "https://registry.npmjs.org/flow-parser/-/flow-parser-0.114.0.tgz",
        "integrity": "sha512-Qt9HT3v507bCerJfp4FX4N5E7ysinBzxjpK1rL7bJ/Bw12puF6lva2MAIXYS1d83bV7BT/F7EDk+faJQY5MpRA==",
        "dev": true
      },
      "flow-remove-types": {
        "version": "2.114.0",
        "resolved": "https://registry.npmjs.org/flow-remove-types/-/flow-remove-types-2.114.0.tgz",
        "integrity": "sha512-ckon8RO7tFcVGW3Ll0jAWgULVrNa/cEN0JXp2I7XmzWT/GCQghSb+0312NjtAb+y3W9iXpPxkVMI86+SDU0E0Q==",
        "dev": true,
        "requires": {
          "flow-parser": "^0.114.0",
          "pirates": "^3.0.2",
          "vlq": "^0.2.1"
        }
      },
      "foreground-child": {
        "version": "1.5.6",
        "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-1.5.6.tgz",
        "integrity": "sha1-T9ca0t/elnibmApcCilZN8svXOk=",
        "dev": true,
        "requires": {
          "cross-spawn": "^4",
          "signal-exit": "^3.0.0"
        }
      },
      "forever-agent": {
        "version": "0.6.1",
        "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
        "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE=",
        "dev": true
      },
      "form-data": {
        "version": "2.3.3",
        "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
        "integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
        "dev": true,
        "requires": {
          "asynckit": "^0.4.0",
          "combined-stream": "^1.0.6",
          "mime-types": "^2.1.12"
        }
      },
      "fs-exists-cached": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/fs-exists-cached/-/fs-exists-cached-1.0.0.tgz",
        "integrity": "sha1-zyVVTKBQ3EmuZla0HeQiWJidy84=",
        "dev": true
      },
      "fs.realpath": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
        "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
        "dev": true
      },
      "fsevents": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.1.2.tgz",
        "integrity": "sha512-R4wDiBwZ0KzpgOWetKDug1FZcYhqYnUYKtfZYt4mD5SBz76q0KR4Q9o7GIPamsVPGmW3EYPPJ0dOOjvx32ldZA==",
        "dev": true,
        "optional": true
      },
      "function-loop": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/function-loop/-/function-loop-1.0.2.tgz",
        "integrity": "sha512-Iw4MzMfS3udk/rqxTiDDCllhGwlOrsr50zViTOO/W6lS/9y6B1J0BD2VZzrnWUYBJsl3aeqjgR5v7bWWhZSYbA==",
        "dev": true
      },
      "get-caller-file": {
        "version": "2.0.5",
        "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
        "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
        "dev": true
      },
      "getpass": {
        "version": "0.1.7",
        "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
        "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
        "dev": true,
        "requires": {
          "assert-plus": "^1.0.0"
        }
      },
      "glob": {
        "version": "7.1.6",
        "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
        "integrity": "sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==",
        "dev": true,
        "requires": {
          "fs.realpath": "^1.0.0",
          "inflight": "^1.0.4",
          "inherits": "2",
          "minimatch": "^3.0.4",
          "once": "^1.3.0",
          "path-is-absolute": "^1.0.0"
        }
      },
      "glob-parent": {
        "version": "5.1.0",
        "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.0.tgz",
        "integrity": "sha512-qjtRgnIVmOfnKUE3NJAQEdk+lKrxfw8t5ke7SXtfMTHcjsBfOfWXCQfdb30zfDoZQ2IRSIiidmjtbHZPZ++Ihw==",
        "dev": true,
        "requires": {
          "is-glob": "^4.0.1"
        }
      },
      "globals": {
        "version": "11.12.0",
        "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
        "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
        "dev": true
      },
      "graceful-fs": {
        "version": "4.2.3",
        "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.3.tgz",
        "integrity": "sha512-a30VEBm4PEdx1dRB7MFK7BejejvCvBronbLjht+sHuGYj8PHs7M/5Z+rt5lw551vZ7yfTCj4Vuyy3mSJytDWRQ==",
        "dev": true
      },
      "handlebars": {
        "version": "4.5.3",
        "resolved": "https://registry.npmjs.org/handlebars/-/handlebars-4.5.3.tgz",
        "integrity": "sha512-3yPecJoJHK/4c6aZhSvxOyG4vJKDshV36VHp0iVCDVh7o9w2vwi3NSnL2MMPj3YdduqaBcu7cGbggJQM0br9xA==",
        "dev": true,
        "requires": {
          "neo-async": "^2.6.0",
          "optimist": "^0.6.1",
          "source-map": "^0.6.1",
          "uglify-js": "^3.1.4"
        }
      },
      "har-schema": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
        "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI=",
        "dev": true
      },
      "har-validator": {
        "version": "5.1.3",
        "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.3.tgz",
        "integrity": "sha512-sNvOCzEQNr/qrvJgc3UG/kD4QtlHycrzwS+6mfTrrSq97BvaYcPZZI1ZSqGSPR73Cxn4LKTD4PttRwfU7jWq5g==",
        "dev": true,
        "requires": {
          "ajv": "^6.5.5",
          "har-schema": "^2.0.0"
        }
      },
      "has-flag": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
        "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
        "dev": true
      },
      "hasha": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/hasha/-/hasha-3.0.0.tgz",
        "integrity": "sha1-UqMvq4Vp1BymmmH/GiFPjrfIvTk=",
        "dev": true,
        "requires": {
          "is-stream": "^1.0.1"
        }
      },
      "hosted-git-info": {
        "version": "2.8.5",
        "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.5.tgz",
        "integrity": "sha512-kssjab8CvdXfcXMXVcvsXum4Hwdq9XGtRD3TteMEvEbq0LXyiNQr6AprqKqfeaDXze7SxWvRxdpwE6ku7ikLkg==",
        "dev": true
      },
      "http-signature": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
        "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
        "dev": true,
        "requires": {
          "assert-plus": "^1.0.0",
          "jsprim": "^1.2.2",
          "sshpk": "^1.7.0"
        }
      },
      "iconv-lite": {
        "version": "0.4.24",
        "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
        "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
        "requires": {
          "safer-buffer": ">= 2.1.2 < 3"
        }
      },
      "import-jsx": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/import-jsx/-/import-jsx-3.0.0.tgz",
        "integrity": "sha512-egZKxDmgqLp15ZVAYfdxI50BVqhQjxLKDzEOuWJIugMLCuRUc4kjeoBhrsdoLDNPK2sX7p0L6AibCeqnYeeZog==",
        "dev": true,
        "requires": {
          "@babel/core": "^7.5.5",
          "@babel/plugin-proposal-object-rest-spread": "^7.5.5",
          "@babel/plugin-transform-destructuring": "^7.5.0",
          "@babel/plugin-transform-react-jsx": "^7.3.0",
          "caller-path": "^2.0.0",
          "resolve-from": "^3.0.0"
        }
      },
      "imurmurhash": {
        "version": "0.1.4",
        "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
        "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o=",
        "dev": true
      },
      "inflight": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
        "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
        "dev": true,
        "requires": {
          "once": "^1.3.0",
          "wrappy": "1"
        }
      },
      "inherits": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
        "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
        "dev": true
      },
      "ink": {
        "version": "2.6.0",
        "resolved": "https://registry.npmjs.org/ink/-/ink-2.6.0.tgz",
        "integrity": "sha512-nD/wlSuB6WnFsFB0nUcOJdy28YvvDer3eo+gezjvZqojGA4Rx5sQpacvN//Aai83DRgwrRTyKBl5aciOcfP3zQ==",
        "dev": true,
        "requires": {
          "ansi-escapes": "^4.2.1",
          "arrify": "^2.0.1",
          "auto-bind": "^3.0.0",
          "chalk": "^3.0.0",
          "cli-cursor": "^3.1.0",
          "cli-truncate": "^2.0.0",
          "is-ci": "^2.0.0",
          "lodash.throttle": "^4.1.1",
          "log-update": "^3.0.0",
          "prop-types": "^15.6.2",
          "react-reconciler": "^0.24.0",
          "scheduler": "^0.18.0",
          "signal-exit": "^3.0.2",
          "slice-ansi": "^3.0.0",
          "string-length": "^3.1.0",
          "widest-line": "^3.1.0",
          "wrap-ansi": "^6.2.0",
          "yoga-layout-prebuilt": "^1.9.3"
        },
        "dependencies": {
          "ansi-styles": {
            "version": "4.2.0",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.2.0.tgz",
            "integrity": "sha512-7kFQgnEaMdRtwf6uSfUnVr9gSGC7faurn+J/Mv90/W+iTtN0405/nLdopfMWwchyxhbGYl6TC4Sccn9TUkGAgg==",
            "dev": true,
            "requires": {
              "@types/color-name": "^1.1.1",
              "color-convert": "^2.0.1"
            }
          },
          "chalk": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
            "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
            "dev": true,
            "requires": {
              "ansi-styles": "^4.1.0",
              "supports-color": "^7.1.0"
            }
          },
          "color-convert": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
            "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
            "dev": true,
            "requires": {
              "color-name": "~1.1.4"
            }
          },
          "color-name": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
            "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
            "dev": true
          },
          "has-flag": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
            "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
            "dev": true
          },
          "supports-color": {
            "version": "7.1.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.1.0.tgz",
            "integrity": "sha512-oRSIpR8pxT1Wr2FquTNnGet79b3BWljqOuoW/h4oBhxJ/HUbX5nX6JSruTkvXDCFMwDPvsaTTbvMLKZWSy0R5g==",
            "dev": true,
            "requires": {
              "has-flag": "^4.0.0"
            }
          }
        }
      },
      "is-arrayish": {
        "version": "0.2.1",
        "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
        "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",
        "dev": true
      },
      "is-binary-path": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
        "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
        "dev": true,
        "requires": {
          "binary-extensions": "^2.0.0"
        }
      },
      "is-ci": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-2.0.0.tgz",
        "integrity": "sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==",
        "dev": true,
        "requires": {
          "ci-info": "^2.0.0"
        }
      },
      "is-extglob": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
        "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
        "dev": true
      },
      "is-fullwidth-code-point": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
        "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
        "dev": true
      },
      "is-glob": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
        "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
        "dev": true,
        "requires": {
          "is-extglob": "^2.1.1"
        }
      },
      "is-number": {
        "version": "7.0.0",
        "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
        "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
        "dev": true
      },
      "is-stream": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
        "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ="
      },
      "is-typedarray": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
        "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
        "dev": true
      },
      "isarray": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
        "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
        "dev": true,
        "optional": true
      },
      "isexe": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
        "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",
        "dev": true
      },
      "isomorphic-fetch": {
        "version": "2.2.1",
        "resolved": "https://registry.npmjs.org/isomorphic-fetch/-/isomorphic-fetch-2.2.1.tgz",
        "integrity": "sha1-YRrhrPFPXoH3KVB0coGf6XM1WKk=",
        "requires": {
          "node-fetch": "^1.0.1",
          "whatwg-fetch": ">=0.10.0"
        }
      },
      "isstream": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
        "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
        "dev": true
      },
      "istanbul-lib-coverage": {
        "version": "2.0.5",
        "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.5.tgz",
        "integrity": "sha512-8aXznuEPCJvGnMSRft4udDRDtb1V3pkQkMMI5LI+6HuQz5oQ4J2UFn1H82raA3qJtyOLkkwVqICBQkjnGtn5mA==",
        "dev": true
      },
      "istanbul-lib-hook": {
        "version": "2.0.7",
        "resolved": "https://registry.npmjs.org/istanbul-lib-hook/-/istanbul-lib-hook-2.0.7.tgz",
        "integrity": "sha512-vrRztU9VRRFDyC+aklfLoeXyNdTfga2EI3udDGn4cZ6fpSXpHLV9X6CHvfoMCPtggg8zvDDmC4b9xfu0z6/llA==",
        "dev": true,
        "requires": {
          "append-transform": "^1.0.0"
        }
      },
      "istanbul-lib-instrument": {
        "version": "3.3.0",
        "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-3.3.0.tgz",
        "integrity": "sha512-5nnIN4vo5xQZHdXno/YDXJ0G+I3dAm4XgzfSVTPLQpj/zAV2dV6Juy0yaf10/zrJOJeHoN3fraFe+XRq2bFVZA==",
        "dev": true,
        "requires": {
          "@babel/generator": "^7.4.0",
          "@babel/parser": "^7.4.3",
          "@babel/template": "^7.4.0",
          "@babel/traverse": "^7.4.3",
          "@babel/types": "^7.4.0",
          "istanbul-lib-coverage": "^2.0.5",
          "semver": "^6.0.0"
        },
        "dependencies": {
          "semver": {
            "version": "6.3.0",
            "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
            "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
            "dev": true
          }
        }
      },
      "istanbul-lib-processinfo": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/istanbul-lib-processinfo/-/istanbul-lib-processinfo-1.0.0.tgz",
        "integrity": "sha512-FY0cPmWa4WoQNlvB8VOcafiRoB5nB+l2Pz2xGuXHRSy1KM8QFOYfz/rN+bGMCAeejrY3mrpF5oJHcN0s/garCg==",
        "dev": true,
        "requires": {
          "archy": "^1.0.0",
          "cross-spawn": "^6.0.5",
          "istanbul-lib-coverage": "^2.0.3",
          "rimraf": "^2.6.3",
          "uuid": "^3.3.2"
        },
        "dependencies": {
          "cross-spawn": {
            "version": "6.0.5",
            "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
            "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
            "dev": true,
            "requires": {
              "nice-try": "^1.0.4",
              "path-key": "^2.0.1",
              "semver": "^5.5.0",
              "shebang-command": "^1.2.0",
              "which": "^1.2.9"
            }
          },
          "which": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
            "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
            "dev": true,
            "requires": {
              "isexe": "^2.0.0"
            }
          }
        }
      },
      "istanbul-lib-report": {
        "version": "2.0.8",
        "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-2.0.8.tgz",
        "integrity": "sha512-fHBeG573EIihhAblwgxrSenp0Dby6tJMFR/HvlerBsrCTD5bkUuoNtn3gVh29ZCS824cGGBPn7Sg7cNk+2xUsQ==",
        "dev": true,
        "requires": {
          "istanbul-lib-coverage": "^2.0.5",
          "make-dir": "^2.1.0",
          "supports-color": "^6.1.0"
        },
        "dependencies": {
          "supports-color": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
            "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
            "dev": true,
            "requires": {
              "has-flag": "^3.0.0"
            }
          }
        }
      },
      "istanbul-lib-source-maps": {
        "version": "3.0.6",
        "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-3.0.6.tgz",
        "integrity": "sha512-R47KzMtDJH6X4/YW9XTx+jrLnZnscW4VpNN+1PViSYTejLVPWv7oov+Duf8YQSPyVRUvueQqz1TcsC6mooZTXw==",
        "dev": true,
        "requires": {
          "debug": "^4.1.1",
          "istanbul-lib-coverage": "^2.0.5",
          "make-dir": "^2.1.0",
          "rimraf": "^2.6.3",
          "source-map": "^0.6.1"
        }
      },
      "istanbul-reports": {
        "version": "2.2.6",
        "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-2.2.6.tgz",
        "integrity": "sha512-SKi4rnMyLBKe0Jy2uUdx28h8oG7ph2PPuQPvIAh31d+Ci+lSiEu4C+h3oBPuJ9+mPKhOyW0M8gY4U5NM1WLeXA==",
        "dev": true,
        "requires": {
          "handlebars": "^4.1.2"
        }
      },
      "jackspeak": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-1.4.0.tgz",
        "integrity": "sha512-VDcSunT+wcccoG46FtzuBAyQKlzhHjli4q31e1fIHGOsRspqNUFjVzGb+7eIFDlTvqLygxapDHPHS0ouT2o/tw==",
        "dev": true,
        "requires": {
          "cliui": "^4.1.0"
        }
      },
      "js-tokens": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
        "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="
      },
      "js-yaml": {
        "version": "3.13.1",
        "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.13.1.tgz",
        "integrity": "sha512-YfbcO7jXDdyj0DGxYVSlSeQNHbD7XPWvrVWeVUujrQEoZzWJIRrCPoyk6kL6IAjAG2IolMK4T0hNUe0HOUs5Jw==",
        "dev": true,
        "requires": {
          "argparse": "^1.0.7",
          "esprima": "^4.0.0"
        }
      },
      "jsbn": {
        "version": "0.1.1",
        "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
        "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
        "dev": true
      },
      "jsesc": {
        "version": "2.5.2",
        "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
        "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==",
        "dev": true
      },
      "json-parse-better-errors": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
        "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==",
        "dev": true
      },
      "json-schema": {
        "version": "0.2.3",
        "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
        "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM=",
        "dev": true
      },
      "json-schema-traverse": {
        "version": "0.4.1",
        "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
        "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
        "dev": true
      },
      "json-stringify-safe": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
        "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
        "dev": true
      },
      "json5": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/json5/-/json5-2.1.1.tgz",
        "integrity": "sha512-l+3HXD0GEI3huGq1njuqtzYK8OYJyXMkOLtQ53pjWh89tvWS2h6l+1zMkYWqlb57+SiQodKZyvMEFb2X+KrFhQ==",
        "dev": true,
        "requires": {
          "minimist": "^1.2.0"
        }
      },
      "jsprim": {
        "version": "1.4.1",
        "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
        "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
        "dev": true,
        "requires": {
          "assert-plus": "1.0.0",
          "extsprintf": "1.3.0",
          "json-schema": "0.2.3",
          "verror": "1.10.0"
        }
      },
      "lcov-parse": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/lcov-parse/-/lcov-parse-1.0.0.tgz",
        "integrity": "sha1-6w1GtUER68VhrLTECO+TY73I9+A=",
        "dev": true
      },
      "load-json-file": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-4.0.0.tgz",
        "integrity": "sha1-L19Fq5HjMhYjT9U62rZo607AmTs=",
        "dev": true,
        "requires": {
          "graceful-fs": "^4.1.2",
          "parse-json": "^4.0.0",
          "pify": "^3.0.0",
          "strip-bom": "^3.0.0"
        },
        "dependencies": {
          "pify": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
            "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
            "dev": true
          }
        }
      },
      "locate-path": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
        "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
        "dev": true,
        "requires": {
          "p-locate": "^3.0.0",
          "path-exists": "^3.0.0"
        }
      },
      "lodash": {
        "version": "4.17.15",
        "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.15.tgz",
        "integrity": "sha512-8xOcRHvCjnocdS5cpwXQXVzmmh5e5+saE2QGoeQmbKmRS6J3VQppPOIt0MnmE+4xlZoumy0GPG0D0MVIQbNA1A==",
        "dev": true
      },
      "lodash.flattendeep": {
        "version": "4.4.0",
        "resolved": "https://registry.npmjs.org/lodash.flattendeep/-/lodash.flattendeep-4.4.0.tgz",
        "integrity": "sha1-+wMJF/hqMTTlvJvsDWngAT3f7bI=",
        "dev": true
      },
      "lodash.throttle": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/lodash.throttle/-/lodash.throttle-4.1.1.tgz",
        "integrity": "sha1-wj6RtxAkKscMN/HhzaknTMOb8vQ=",
        "dev": true
      },
      "log-driver": {
        "version": "1.2.7",
        "resolved": "https://registry.npmjs.org/log-driver/-/log-driver-1.2.7.tgz",
        "integrity": "sha512-U7KCmLdqsGHBLeWqYlFA0V0Sl6P08EE1ZrmA9cxjUE0WVqT9qnyVDPz1kzpFEP0jdJuFnasWIfSd7fsaNXkpbg==",
        "dev": true
      },
      "log-update": {
        "version": "3.3.0",
        "resolved": "https://registry.npmjs.org/log-update/-/log-update-3.3.0.tgz",
        "integrity": "sha512-YSKm5n+YjZoGZT5lfmOqasVH1fIH9xQA9A81Y48nZ99PxAP62vdCCtua+Gcu6oTn0nqtZd/LwRV+Vflo53ZDWA==",
        "dev": true,
        "requires": {
          "ansi-escapes": "^3.2.0",
          "cli-cursor": "^2.1.0",
          "wrap-ansi": "^5.0.0"
        },
        "dependencies": {
          "ansi-escapes": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
            "integrity": "sha512-cBhpre4ma+U0T1oM5fXg7Dy1Jw7zzwv7lt/GoCpr+hDQJoYnKVPLL4dCvSEFMmQurOQvSrwT7SL/DAlhBI97RQ==",
            "dev": true
          },
          "ansi-regex": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
            "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
            "dev": true
          },
          "cli-cursor": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
            "integrity": "sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=",
            "dev": true,
            "requires": {
              "restore-cursor": "^2.0.0"
            }
          },
          "emoji-regex": {
            "version": "7.0.3",
            "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
            "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==",
            "dev": true
          },
          "is-fullwidth-code-point": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
            "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
            "dev": true
          },
          "mimic-fn": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
            "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ==",
            "dev": true
          },
          "onetime": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
            "integrity": "sha1-BnQoIw/WdEOyeUsiu6UotoZ5YtQ=",
            "dev": true,
            "requires": {
              "mimic-fn": "^1.0.0"
            }
          },
          "restore-cursor": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
            "integrity": "sha1-n37ih/gv0ybU/RYpI9YhKe7g368=",
            "dev": true,
            "requires": {
              "onetime": "^2.0.0",
              "signal-exit": "^3.0.2"
            }
          },
          "string-width": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
            "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
            "dev": true,
            "requires": {
              "emoji-regex": "^7.0.1",
              "is-fullwidth-code-point": "^2.0.0",
              "strip-ansi": "^5.1.0"
            }
          },
          "strip-ansi": {
            "version": "5.2.0",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
            "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
            "dev": true,
            "requires": {
              "ansi-regex": "^4.1.0"
            }
          },
          "wrap-ansi": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
            "integrity": "sha512-QC1/iN/2/RPVJ5jYK8BGttj5z83LmSKmvbvrXPNCLZSEb32KKVDJDl/MOt2N01qU2H/FkzEa9PKto1BqDjtd7Q==",
            "dev": true,
            "requires": {
              "ansi-styles": "^3.2.0",
              "string-width": "^3.0.0",
              "strip-ansi": "^5.0.0"
            }
          }
        }
      },
      "loose-envify": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
        "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
        "requires": {
          "js-tokens": "^3.0.0 || ^4.0.0"
        }
      },
      "lru-cache": {
        "version": "4.1.5",
        "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",
        "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
        "dev": true,
        "requires": {
          "pseudomap": "^1.0.2",
          "yallist": "^2.1.2"
        }
      },
      "make-dir": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
        "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
        "dev": true,
        "requires": {
          "pify": "^4.0.1",
          "semver": "^5.6.0"
        }
      },
      "make-error": {
        "version": "1.3.5",
        "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.5.tgz",
        "integrity": "sha512-c3sIjNUow0+8swNwVpqoH4YCShKNFkMaw6oH1mNS2haDZQqkeZFlHS3dhoeEbKKmJB4vXpJucU6oH75aDYeE9g==",
        "dev": true
      },
      "merge-source-map": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/merge-source-map/-/merge-source-map-1.1.0.tgz",
        "integrity": "sha512-Qkcp7P2ygktpMPh2mCQZaf3jhN6D3Z/qVZHSdWvQ+2Ef5HgRAPBO57A77+ENm0CPx2+1Ce/MYKi3ymqdfuqibw==",
        "dev": true,
        "requires": {
          "source-map": "^0.6.1"
        }
      },
      "mime-db": {
        "version": "1.42.0",
        "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.42.0.tgz",
        "integrity": "sha512-UbfJCR4UAVRNgMpfImz05smAXK7+c+ZntjaA26ANtkXLlOe947Aag5zdIcKQULAiF9Cq4WxBi9jUs5zkA84bYQ==",
        "dev": true
      },
      "mime-types": {
        "version": "2.1.25",
        "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.25.tgz",
        "integrity": "sha512-5KhStqB5xpTAeGqKBAMgwaYMnQik7teQN4IAzC7npDv6kzeU6prfkR67bc87J1kWMPGkoaZSq1npmexMgkmEVg==",
        "dev": true,
        "requires": {
          "mime-db": "1.42.0"
        }
      },
      "mimic-fn": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
        "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==",
        "dev": true
      },
      "minimatch": {
        "version": "3.0.4",
        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
        "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
        "dev": true,
        "requires": {
          "brace-expansion": "^1.1.7"
        }
      },
      "minimist": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
        "integrity": "sha1-o1AIsg9BOD7sH7kU9M1d95omQoQ=",
        "dev": true
      },
      "minipass": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.1.1.tgz",
        "integrity": "sha512-UFqVihv6PQgwj8/yTGvl9kPz7xIAY+R5z6XYjRInD3Gk3qx6QGSD6zEcpeG4Dy/lQnv1J6zv8ejV90hyYIKf3w==",
        "dev": true,
        "requires": {
          "yallist": "^4.0.0"
        },
        "dependencies": {
          "yallist": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
            "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
            "dev": true
          }
        }
      },
      "mkdirp": {
        "version": "0.5.1",
        "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.1.tgz",
        "integrity": "sha1-MAV0OOrGz3+MR2fzhkjWaX11yQM=",
        "dev": true,
        "requires": {
          "minimist": "0.0.8"
        },
        "dependencies": {
          "minimist": {
            "version": "0.0.8",
            "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz",
            "integrity": "sha1-hX/Kv8M5fSYluCKCYuhqp6ARsF0=",
            "dev": true
          }
        }
      },
      "ms": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
        "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
        "dev": true
      },
      "neo-async": {
        "version": "2.6.1",
        "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.1.tgz",
        "integrity": "sha512-iyam8fBuCUpWeKPGpaNMetEocMt364qkCsfL9JuhjXX6dRnguRVOfk2GZaDpPjcOKiiXCPINZC1GczQ7iTq3Zw==",
        "dev": true
      },
      "nested-error-stacks": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/nested-error-stacks/-/nested-error-stacks-2.1.0.tgz",
        "integrity": "sha512-AO81vsIO1k1sM4Zrd6Hu7regmJN1NSiAja10gc4bX3F0wd+9rQmcuHQaHVQCYIEC8iFXnE+mavh23GOt7wBgug==",
        "dev": true
      },
      "nice-try": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
        "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ==",
        "dev": true
      },
      "node-fetch": {
        "version": "1.7.3",
        "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-1.7.3.tgz",
        "integrity": "sha512-NhZ4CsKx7cYm2vSrBAr2PvFOe6sWDf0UYLRqA6svUYg7+/TSfVAu49jYC4BvQ4Sms9SZgdqGBgroqfDhJdTyKQ==",
        "requires": {
          "encoding": "^0.1.11",
          "is-stream": "^1.0.1"
        }
      },
      "node-modules-regexp": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/node-modules-regexp/-/node-modules-regexp-1.0.0.tgz",
        "integrity": "sha1-jZ2+KJZKSsVxLpExZCEHxx6Q7EA=",
        "dev": true
      },
      "normalize-package-data": {
        "version": "2.5.0",
        "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
        "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
        "dev": true,
        "requires": {
          "hosted-git-info": "^2.1.4",
          "resolve": "^1.10.0",
          "semver": "2 || 3 || 4 || 5",
          "validate-npm-package-license": "^3.0.1"
        }
      },
      "normalize-path": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
        "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
        "dev": true
      },
      "number-is-nan": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
        "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0=",
        "dev": true
      },
      "nyc": {
        "version": "14.1.1",
        "resolved": "https://registry.npmjs.org/nyc/-/nyc-14.1.1.tgz",
        "integrity": "sha512-OI0vm6ZGUnoGZv/tLdZ2esSVzDwUC88SNs+6JoSOMVxA+gKMB8Tk7jBwgemLx4O40lhhvZCVw1C+OYLOBOPXWw==",
        "dev": true,
        "requires": {
          "archy": "^1.0.0",
          "caching-transform": "^3.0.2",
          "convert-source-map": "^1.6.0",
          "cp-file": "^6.2.0",
          "find-cache-dir": "^2.1.0",
          "find-up": "^3.0.0",
          "foreground-child": "^1.5.6",
          "glob": "^7.1.3",
          "istanbul-lib-coverage": "^2.0.5",
          "istanbul-lib-hook": "^2.0.7",
          "istanbul-lib-instrument": "^3.3.0",
          "istanbul-lib-report": "^2.0.8",
          "istanbul-lib-source-maps": "^3.0.6",
          "istanbul-reports": "^2.2.4",
          "js-yaml": "^3.13.1",
          "make-dir": "^2.1.0",
          "merge-source-map": "^1.1.0",
          "resolve-from": "^4.0.0",
          "rimraf": "^2.6.3",
          "signal-exit": "^3.0.2",
          "spawn-wrap": "^1.4.2",
          "test-exclude": "^5.2.3",
          "uuid": "^3.3.2",
          "yargs": "^13.2.2",
          "yargs-parser": "^13.0.0"
        },
        "dependencies": {
          "resolve-from": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
            "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
            "dev": true
          }
        }
      },
      "oauth-sign": {
        "version": "0.9.0",
        "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
        "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==",
        "dev": true
      },
      "object-assign": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
        "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="
      },
      "once": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
        "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
        "dev": true,
        "requires": {
          "wrappy": "1"
        }
      },
      "onetime": {
        "version": "5.1.0",
        "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.0.tgz",
        "integrity": "sha512-5NcSkPHhwTVFIQN+TUqXoS5+dlElHXdpAWu9I0HP20YOtIi+aZ0Ct82jdlILDxjLEAWwvm+qj1m6aEtsDVmm6Q==",
        "dev": true,
        "requires": {
          "mimic-fn": "^2.1.0"
        }
      },
      "opener": {
        "version": "1.5.1",
        "resolved": "https://registry.npmjs.org/opener/-/opener-1.5.1.tgz",
        "integrity": "sha512-goYSy5c2UXE4Ra1xixabeVh1guIX/ZV/YokJksb6q2lubWu6UbvPQ20p542/sFIll1nl8JnCyK9oBaOcCWXwvA==",
        "dev": true
      },
      "optimist": {
        "version": "0.6.1",
        "resolved": "https://registry.npmjs.org/optimist/-/optimist-0.6.1.tgz",
        "integrity": "sha1-2j6nRob6IaGaERwybpDrFaAZZoY=",
        "dev": true,
        "requires": {
          "minimist": "~0.0.1",
          "wordwrap": "~0.0.2"
        },
        "dependencies": {
          "minimist": {
            "version": "0.0.10",
            "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.10.tgz",
            "integrity": "sha1-3j+YVD2/lggr5IrRoMfNqDYwHc8=",
            "dev": true
          }
        }
      },
      "os-homedir": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
        "integrity": "sha1-/7xJiDNuDoM94MFox+8VISGqf7M=",
        "dev": true
      },
      "own-or": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/own-or/-/own-or-1.0.0.tgz",
        "integrity": "sha1-Tod/vtqaLsgAD7wLyuOWRe6L+Nw=",
        "dev": true
      },
      "own-or-env": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/own-or-env/-/own-or-env-1.0.1.tgz",
        "integrity": "sha512-y8qULRbRAlL6x2+M0vIe7jJbJx/kmUTzYonRAa2ayesR2qWLswninkVyeJe4x3IEXhdgoNodzjQRKAoEs6Fmrw==",
        "dev": true,
        "requires": {
          "own-or": "^1.0.0"
        }
      },
      "p-limit": {
        "version": "2.2.1",
        "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.2.1.tgz",
        "integrity": "sha512-85Tk+90UCVWvbDavCLKPOLC9vvY8OwEX/RtKF+/1OADJMVlFfEHOiMTPVyxg7mk/dKa+ipdHm0OUkTvCpMTuwg==",
        "dev": true,
        "requires": {
          "p-try": "^2.0.0"
        }
      },
      "p-locate": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
        "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
        "dev": true,
        "requires": {
          "p-limit": "^2.0.0"
        }
      },
      "p-try": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
        "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
        "dev": true
      },
      "package-hash": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/package-hash/-/package-hash-3.0.0.tgz",
        "integrity": "sha512-lOtmukMDVvtkL84rJHI7dpTYq+0rli8N2wlnqUcBuDWCfVhRUfOmnR9SsoHFMLpACvEV60dX7rd0rFaYDZI+FA==",
        "dev": true,
        "requires": {
          "graceful-fs": "^4.1.15",
          "hasha": "^3.0.0",
          "lodash.flattendeep": "^4.4.0",
          "release-zalgo": "^1.0.0"
        }
      },
      "parse-json": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
        "integrity": "sha1-vjX1Qlvh9/bHRxhPmKeIy5lHfuA=",
        "dev": true,
        "requires": {
          "error-ex": "^1.3.1",
          "json-parse-better-errors": "^1.0.1"
        }
      },
      "path-exists": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
        "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
        "dev": true
      },
      "path-is-absolute": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
        "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
        "dev": true
      },
      "path-key": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
        "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=",
        "dev": true
      },
      "path-parse": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
        "integrity": "sha512-GSmOT2EbHrINBf9SR7CDELwlJ8AENk3Qn7OikK4nFYAu3Ote2+JYNVvkpAEQm3/TLNEJFD/xZJjzyxg3KBWOzw==",
        "dev": true
      },
      "path-type": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
        "integrity": "sha512-T2ZUsdZFHgA3u4e5PfPbjd7HDDpxPnQb5jN0SrDsjNSuVXHJqtwTnWqG0B1jZrgmJ/7lj1EmVIByWt1gxGkWvg==",
        "dev": true,
        "requires": {
          "pify": "^3.0.0"
        },
        "dependencies": {
          "pify": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
            "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
            "dev": true
          }
        }
      },
      "performance-now": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
        "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
        "dev": true
      },
      "picomatch": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.1.1.tgz",
        "integrity": "sha512-OYMyqkKzK7blWO/+XZYP6w8hH0LDvkBvdvKukti+7kqYFCiEAk+gI3DWnryapc0Dau05ugGTy0foQ6mqn4AHYA==",
        "dev": true
      },
      "pify": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
        "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
        "dev": true
      },
      "pirates": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/pirates/-/pirates-3.0.2.tgz",
        "integrity": "sha512-c5CgUJq6H2k6MJz72Ak1F5sN9n9wlSlJyEnwvpm9/y3WB4E3pHBDT2c6PEiS1vyJvq2bUxUAIu0EGf8Cx4Ic7Q==",
        "dev": true,
        "requires": {
          "node-modules-regexp": "^1.0.0"
        }
      },
      "pkg-dir": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-3.0.0.tgz",
        "integrity": "sha512-/E57AYkoeQ25qkxMj5PBOVgF8Kiu/h7cYS30Z5+R7WaiCCBfLq58ZI/dSeaEKb9WVJV5n/03QwrN3IeWIFllvw==",
        "dev": true,
        "requires": {
          "find-up": "^3.0.0"
        }
      },
      "process-nextick-args": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
        "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
        "dev": true,
        "optional": true
      },
      "promise": {
        "version": "7.3.1",
        "resolved": "https://registry.npmjs.org/promise/-/promise-7.3.1.tgz",
        "integrity": "sha512-nolQXZ/4L+bP/UGlkfaIujX9BKxGwmQ9OT4mOt5yvy8iK1h3wqTEJCijzGANTCCl9nWjY41juyAn2K3Q1hLLTg==",
        "requires": {
          "asap": "~2.0.3"
        }
      },
      "prop-types": {
        "version": "15.7.2",
        "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.7.2.tgz",
        "integrity": "sha512-8QQikdH7//R2vurIJSutZ1smHYTcLpRWEOlHnzcWHmBYrOGUysKwSsrC89BCiFj3CbrfJ/nXFdJepOVrY1GCHQ==",
        "requires": {
          "loose-envify": "^1.4.0",
          "object-assign": "^4.1.1",
          "react-is": "^16.8.1"
        }
      },
      "pseudomap": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz",
        "integrity": "sha1-8FKijacOYYkX7wqKw0wa5aaChrM=",
        "dev": true
      },
      "psl": {
        "version": "1.7.0",
        "resolved": "https://registry.npmjs.org/psl/-/psl-1.7.0.tgz",
        "integrity": "sha512-5NsSEDv8zY70ScRnOTn7bK7eanl2MvFrOrS/R6x+dBt5g1ghnj9Zv90kO8GwT8gxcu2ANyFprnFYB85IogIJOQ==",
        "dev": true
      },
      "punycode": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
        "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
        "dev": true
      },
      "qs": {
        "version": "6.5.2",
        "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
        "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA==",
        "dev": true
      },
      "react": {
        "version": "15.6.2",
        "resolved": "https://registry.npmjs.org/react/-/react-15.6.2.tgz",
        "integrity": "sha1-26BDSrQ5z+gvEI8PURZjkIF5qnI=",
        "requires": {
          "create-react-class": "^15.6.0",
          "fbjs": "^0.8.9",
          "loose-envify": "^1.1.0",
          "object-assign": "^4.1.0",
          "prop-types": "^15.5.10"
        }
      },
      "react-is": {
        "version": "16.12.0",
        "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.12.0.tgz",
        "integrity": "sha512-rPCkf/mWBtKc97aLL9/txD8DZdemK0vkA3JMLShjlJB3Pj3s+lpf1KaBzMfQrAmhMQB0n1cU/SUGgKKBCe837Q=="
      },
      "react-reconciler": {
        "version": "0.24.0",
        "resolved": "https://registry.npmjs.org/react-reconciler/-/react-reconciler-0.24.0.tgz",
        "integrity": "sha512-gAGnwWkf+NOTig9oOowqid9O0HjTDC+XVGBCAmJYYJ2A2cN/O4gDdIuuUQjv8A4v6GDwVfJkagpBBLW5OW9HSw==",
        "dev": true,
        "requires": {
          "loose-envify": "^1.1.0",
          "object-assign": "^4.1.1",
          "prop-types": "^15.6.2",
          "scheduler": "^0.18.0"
        }
      },
      "read-pkg": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-3.0.0.tgz",
        "integrity": "sha1-nLxoaXj+5l0WwA4rGcI3/Pbjg4k=",
        "dev": true,
        "requires": {
          "load-json-file": "^4.0.0",
          "normalize-package-data": "^2.3.2",
          "path-type": "^3.0.0"
        }
      },
      "read-pkg-up": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-4.0.0.tgz",
        "integrity": "sha512-6etQSH7nJGsK0RbG/2TeDzZFa8shjQ1um+SwQQ5cwKy0dhSXdOncEhb1CPpvQG4h7FyOV6EB6YlV0yJvZQNAkA==",
        "dev": true,
        "requires": {
          "find-up": "^3.0.0",
          "read-pkg": "^3.0.0"
        }
      },
      "readable-stream": {
        "version": "2.3.6",
        "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
        "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
        "dev": true,
        "optional": true,
        "requires": {
          "core-util-is": "~1.0.0",
          "inherits": "~2.0.3",
          "isarray": "~1.0.0",
          "process-nextick-args": "~2.0.0",
          "safe-buffer": "~5.1.1",
          "string_decoder": "~1.1.1",
          "util-deprecate": "~1.0.1"
        },
        "dependencies": {
          "safe-buffer": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
            "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
            "dev": true,
            "optional": true
          }
        }
      },
      "readdirp": {
        "version": "3.3.0",
        "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.3.0.tgz",
        "integrity": "sha512-zz0pAkSPOXXm1viEwygWIPSPkcBYjW1xU5j/JBh5t9bGCJwa6f9+BJa6VaB2g+b55yVrmXzqkyLf4xaWYM0IkQ==",
        "dev": true,
        "requires": {
          "picomatch": "^2.0.7"
        }
      },
      "redeyed": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/redeyed/-/redeyed-2.1.1.tgz",
        "integrity": "sha1-iYS1gV2ZyyIEacme7v/jiRPmzAs=",
        "dev": true,
        "requires": {
          "esprima": "~4.0.0"
        }
      },
      "regenerator-runtime": {
        "version": "0.13.3",
        "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.3.tgz",
        "integrity": "sha512-naKIZz2GQ8JWh///G7L3X6LaQUAMp2lvb1rvwwsURe/VXwD6VMfr+/1NuNw3ag8v2kY1aQ/go5SNn79O9JU7yw==",
        "dev": true
      },
      "release-zalgo": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/release-zalgo/-/release-zalgo-1.0.0.tgz",
        "integrity": "sha1-CXALflB0Mpc5Mw5TXFqQ+2eFFzA=",
        "dev": true,
        "requires": {
          "es6-error": "^4.0.1"
        }
      },
      "request": {
        "version": "2.88.0",
        "resolved": "https://registry.npmjs.org/request/-/request-2.88.0.tgz",
        "integrity": "sha512-NAqBSrijGLZdM0WZNsInLJpkJokL72XYjUpnB0iwsRgxh7dB6COrHnTBNwN0E+lHDAJzu7kLAkDeY08z2/A0hg==",
        "dev": true,
        "requires": {
          "aws-sign2": "~0.7.0",
          "aws4": "^1.8.0",
          "caseless": "~0.12.0",
          "combined-stream": "~1.0.6",
          "extend": "~3.0.2",
          "forever-agent": "~0.6.1",
          "form-data": "~2.3.2",
          "har-validator": "~5.1.0",
          "http-signature": "~1.2.0",
          "is-typedarray": "~1.0.0",
          "isstream": "~0.1.2",
          "json-stringify-safe": "~5.0.1",
          "mime-types": "~2.1.19",
          "oauth-sign": "~0.9.0",
          "performance-now": "^2.1.0",
          "qs": "~6.5.2",
          "safe-buffer": "^5.1.2",
          "tough-cookie": "~2.4.3",
          "tunnel-agent": "^0.6.0",
          "uuid": "^3.3.2"
        }
      },
      "require-directory": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
        "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I=",
        "dev": true
      },
      "require-main-filename": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
        "integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg==",
        "dev": true
      },
      "resolve": {
        "version": "1.14.1",
        "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.14.1.tgz",
        "integrity": "sha512-fn5Wobh4cxbLzuHaE+nphztHy43/b++4M6SsGFC2gB8uYwf0C8LcarfCz1un7UTW8OFQg9iNjZ4xpcFVGebDPg==",
        "dev": true,
        "requires": {
          "path-parse": "^1.0.6"
        }
      },
      "resolve-from": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-3.0.0.tgz",
        "integrity": "sha1-six699nWiBvItuZTM17rywoYh0g=",
        "dev": true
      },
      "restore-cursor": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-3.1.0.tgz",
        "integrity": "sha512-l+sSefzHpj5qimhFSE5a8nufZYAM3sBSVMAPtYkmC+4EH2anSGaEMXSD0izRQbu9nfyQ9y5JrVmp7E8oZrUjvA==",
        "dev": true,
        "requires": {
          "onetime": "^5.1.0",
          "signal-exit": "^3.0.2"
        }
      },
      "rimraf": {
        "version": "2.7.1",
        "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
        "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
        "dev": true,
        "requires": {
          "glob": "^7.1.3"
        }
      },
      "safe-buffer": {
        "version": "5.2.0",
        "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.0.tgz",
        "integrity": "sha512-fZEwUGbVl7kouZs1jCdMLdt95hdIv0ZeHg6L7qPeciMZhZ+/gdesW4wgTARkrFWEpspjEATAzUGPG8N2jJiwbg==",
        "dev": true
      },
      "safer-buffer": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
        "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
      },
      "scheduler": {
        "version": "0.18.0",
        "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.18.0.tgz",
        "integrity": "sha512-agTSHR1Nbfi6ulI0kYNK0203joW2Y5W4po4l+v03tOoiJKpTBbxpNhWDvqc/4IcOw+KLmSiQLTasZ4cab2/UWQ==",
        "dev": true,
        "requires": {
          "loose-envify": "^1.1.0",
          "object-assign": "^4.1.1"
        }
      },
      "semver": {
        "version": "5.7.1",
        "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
        "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
        "dev": true
      },
      "set-blocking": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
        "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc=",
        "dev": true
      },
      "setimmediate": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
        "integrity": "sha1-KQy7Iy4waULX1+qbg3Mqt4VvgoU="
      },
      "shebang-command": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
        "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
        "dev": true,
        "requires": {
          "shebang-regex": "^1.0.0"
        }
      },
      "shebang-regex": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
        "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM=",
        "dev": true
      },
      "signal-exit": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.2.tgz",
        "integrity": "sha1-tf3AjxKH6hF4Yo5BXiUTK3NkbG0=",
        "dev": true
      },
      "slice-ansi": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-3.0.0.tgz",
        "integrity": "sha512-pSyv7bSTC7ig9Dcgbw9AuRNUb5k5V6oDudjZoMBSr13qpLBG7tB+zgCkARjq7xIUgdz5P1Qe8u+rSGdouOOIyQ==",
        "dev": true,
        "requires": {
          "ansi-styles": "^4.0.0",
          "astral-regex": "^2.0.0",
          "is-fullwidth-code-point": "^3.0.0"
        },
        "dependencies": {
          "ansi-styles": {
            "version": "4.2.0",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.2.0.tgz",
            "integrity": "sha512-7kFQgnEaMdRtwf6uSfUnVr9gSGC7faurn+J/Mv90/W+iTtN0405/nLdopfMWwchyxhbGYl6TC4Sccn9TUkGAgg==",
            "dev": true,
            "requires": {
              "@types/color-name": "^1.1.1",
              "color-convert": "^2.0.1"
            }
          },
          "color-convert": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
            "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
            "dev": true,
            "requires": {
              "color-name": "~1.1.4"
            }
          },
          "color-name": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
            "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
            "dev": true
          }
        }
      },
      "source-map": {
        "version": "0.6.1",
        "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
        "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
        "dev": true
      },
      "source-map-support": {
        "version": "0.5.16",
        "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.16.tgz",
        "integrity": "sha512-efyLRJDr68D9hBBNIPWFjhpFzURh+KJykQwvMyW5UiZzYwoF6l4YMMDIJJEyFWxWCqfyxLzz6tSfUFR+kXXsVQ==",
        "dev": true,
        "requires": {
          "buffer-from": "^1.0.0",
          "source-map": "^0.6.0"
        }
      },
      "spawn-wrap": {
        "version": "1.4.3",
        "resolved": "https://registry.npmjs.org/spawn-wrap/-/spawn-wrap-1.4.3.tgz",
        "integrity": "sha512-IgB8md0QW/+tWqcavuFgKYR/qIRvJkRLPJDFaoXtLLUaVcCDK0+HeFTkmQHj3eprcYhc+gOl0aEA1w7qZlYezw==",
        "dev": true,
        "requires": {
          "foreground-child": "^1.5.6",
          "mkdirp": "^0.5.0",
          "os-homedir": "^1.0.1",
          "rimraf": "^2.6.2",
          "signal-exit": "^3.0.2",
          "which": "^1.3.0"
        },
        "dependencies": {
          "which": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
            "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
            "dev": true,
            "requires": {
              "isexe": "^2.0.0"
            }
          }
        }
      },
      "spdx-correct": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.0.tgz",
        "integrity": "sha512-lr2EZCctC2BNR7j7WzJ2FpDznxky1sjfxvvYEyzxNyb6lZXHODmEoJeFu4JupYlkfha1KZpJyoqiJ7pgA1qq8Q==",
        "dev": true,
        "requires": {
          "spdx-expression-parse": "^3.0.0",
          "spdx-license-ids": "^3.0.0"
        }
      },
      "spdx-exceptions": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.2.0.tgz",
        "integrity": "sha512-2XQACfElKi9SlVb1CYadKDXvoajPgBVPn/gOQLrTvHdElaVhr7ZEbqJaRnJLVNeaI4cMEAgVCeBMKF6MWRDCRA==",
        "dev": true
      },
      "spdx-expression-parse": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.0.tgz",
        "integrity": "sha512-Yg6D3XpRD4kkOmTpdgbUiEJFKghJH03fiC1OPll5h/0sO6neh2jqRDVHOQ4o/LMea0tgCkbMgea5ip/e+MkWyg==",
        "dev": true,
        "requires": {
          "spdx-exceptions": "^2.1.0",
          "spdx-license-ids": "^3.0.0"
        }
      },
      "spdx-license-ids": {
        "version": "3.0.5",
        "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.5.tgz",
        "integrity": "sha512-J+FWzZoynJEXGphVIS+XEh3kFSjZX/1i9gFBaWQcB+/tmpe2qUsSBABpcxqxnAxFdiUFEgAX1bjYGQvIZmoz9Q==",
        "dev": true
      },
      "sprintf-js": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
        "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw=",
        "dev": true
      },
      "sshpk": {
        "version": "1.16.1",
        "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.16.1.tgz",
        "integrity": "sha512-HXXqVUq7+pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg==",
        "dev": true,
        "requires": {
          "asn1": "~0.2.3",
          "assert-plus": "^1.0.0",
          "bcrypt-pbkdf": "^1.0.0",
          "dashdash": "^1.12.0",
          "ecc-jsbn": "~0.1.1",
          "getpass": "^0.1.1",
          "jsbn": "~0.1.0",
          "safer-buffer": "^2.0.2",
          "tweetnacl": "~0.14.0"
        }
      },
      "stack-utils": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-1.0.2.tgz",
        "integrity": "sha512-MTX+MeG5U994cazkjd/9KNAapsHnibjMLnfXodlkXw76JEea0UiNzrqidzo1emMwk7w5Qhc9jd4Bn9TBb1MFwA==",
        "dev": true
      },
      "string-length": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/string-length/-/string-length-3.1.0.tgz",
        "integrity": "sha512-Ttp5YvkGm5v9Ijagtaz1BnN+k9ObpvS0eIBblPMp2YWL8FBmi9qblQ9fexc2k/CXFgrTIteU3jAw3payCnwSTA==",
        "dev": true,
        "requires": {
          "astral-regex": "^1.0.0",
          "strip-ansi": "^5.2.0"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
            "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
            "dev": true
          },
          "astral-regex": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-1.0.0.tgz",
            "integrity": "sha512-+Ryf6g3BKoRc7jfp7ad8tM4TtMiaWvbF/1/sQcZPkkS7ag3D5nMBCe2UfOTONtAkaG0tO0ij3C5Lwmf1EiyjHg==",
            "dev": true
          },
          "strip-ansi": {
            "version": "5.2.0",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
            "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
            "dev": true,
            "requires": {
              "ansi-regex": "^4.1.0"
            }
          }
        }
      },
      "string-width": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.0.tgz",
        "integrity": "sha512-zUz5JD+tgqtuDjMhwIg5uFVV3dtqZ9yQJlZVfq4I01/K5Paj5UHj7VyrQOJvzawSVlKpObApbfD0Ed6yJc+1eg==",
        "dev": true,
        "requires": {
          "emoji-regex": "^8.0.0",
          "is-fullwidth-code-point": "^3.0.0",
          "strip-ansi": "^6.0.0"
        }
      },
      "string_decoder": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
        "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
        "dev": true,
        "optional": true,
        "requires": {
          "safe-buffer": "~5.1.0"
        },
        "dependencies": {
          "safe-buffer": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
            "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
            "dev": true,
            "optional": true
          }
        }
      },
      "strip-ansi": {
        "version": "6.0.0",
        "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
        "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
        "dev": true,
        "requires": {
          "ansi-regex": "^5.0.0"
        }
      },
      "strip-bom": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
        "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
        "dev": true
      },
      "supports-color": {
        "version": "5.5.0",
        "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
        "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
        "dev": true,
        "requires": {
          "has-flag": "^3.0.0"
        }
      },
      "tap": {
        "version": "14.10.2-unbundled",
        "resolved": "https://registry.npmjs.org/tap/-/tap-14.10.2-unbundled.tgz",
        "integrity": "sha512-31xCnBkxXT/2AN/Gp+aVZHLulrOY6+DMhYm+3Cj70i7T9dY9YZ2mp5rDWtaXEDcyz7kfHO2Q36d4cDOdvd76Uw==",
        "dev": true,
        "requires": {
          "async-hook-domain": "^1.1.3",
          "bind-obj-methods": "^2.0.0",
          "browser-process-hrtime": "^1.0.0",
          "chokidar": "^3.3.0",
          "color-support": "^1.1.0",
          "coveralls": "^3.0.8",
          "diff": "^4.0.1",
          "esm": "^3.2.25",
          "findit": "^2.0.0",
          "flow-remove-types": "^2.112.0",
          "foreground-child": "^1.3.3",
          "fs-exists-cached": "^1.0.0",
          "function-loop": "^1.0.2",
          "glob": "^7.1.6",
          "import-jsx": "^3.0.0",
          "ink": "^2.5.0",
          "isexe": "^2.0.0",
          "istanbul-lib-processinfo": "^1.0.0",
          "jackspeak": "^1.4.0",
          "minipass": "^3.1.1",
          "mkdirp": "^0.5.1",
          "nyc": "^14.1.1",
          "opener": "^1.5.1",
          "own-or": "^1.0.0",
          "own-or-env": "^1.0.1",
          "react": "^16.12.0",
          "rimraf": "^2.7.1",
          "signal-exit": "^3.0.0",
          "source-map-support": "^0.5.16",
          "stack-utils": "^1.0.2",
          "tap-mocha-reporter": "^5.0.0",
          "tap-parser": "^10.0.1",
          "tap-yaml": "^1.0.0",
          "tcompare": "^3.0.0",
          "treport": "^1.0.0",
          "trivial-deferred": "^1.0.1",
          "ts-node": "^8.5.2",
          "typescript": "^3.7.2",
          "which": "^2.0.2",
          "write-file-atomic": "^3.0.1",
          "yaml": "^1.7.2",
          "yapool": "^1.0.0"
        },
        "dependencies": {
          "react": {
            "version": "16.12.0",
            "resolved": "https://registry.npmjs.org/react/-/react-16.12.0.tgz",
            "integrity": "sha512-fglqy3k5E+81pA8s+7K0/T3DBCF0ZDOher1elBFzF7O6arXJgzyu/FW+COxFvAWXJoJN9KIZbT2LXlukwphYTA==",
            "dev": true,
            "requires": {
              "loose-envify": "^1.1.0",
              "object-assign": "^4.1.1",
              "prop-types": "^15.6.2"
            }
          }
        }
      },
      "tap-mocha-reporter": {
        "version": "5.0.0",
        "resolved": "https://registry.npmjs.org/tap-mocha-reporter/-/tap-mocha-reporter-5.0.0.tgz",
        "integrity": "sha512-8HlAtdmYGlDZuW83QbF/dc46L7cN+AGhLZcanX3I9ILvxUAl+G2/mtucNPSXecTlG/4iP1hv6oMo0tMhkn3Tsw==",
        "dev": true,
        "requires": {
          "color-support": "^1.1.0",
          "debug": "^2.1.3",
          "diff": "^1.3.2",
          "escape-string-regexp": "^1.0.3",
          "glob": "^7.0.5",
          "readable-stream": "^2.1.5",
          "tap-parser": "^10.0.0",
          "tap-yaml": "^1.0.0",
          "unicode-length": "^1.0.0"
        },
        "dependencies": {
          "debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "dev": true,
            "requires": {
              "ms": "2.0.0"
            }
          },
          "diff": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/diff/-/diff-1.4.0.tgz",
            "integrity": "sha1-fyjS657nsVqX79ic5j3P2qPMur8=",
            "dev": true
          },
          "ms": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
            "dev": true
          }
        }
      },
      "tap-parser": {
        "version": "10.0.1",
        "resolved": "https://registry.npmjs.org/tap-parser/-/tap-parser-10.0.1.tgz",
        "integrity": "sha512-qdT15H0DoJIi7zOqVXDn9X0gSM68JjNy1w3VemwTJlDnETjbi6SutnqmBfjDJAwkFS79NJ97gZKqie00ZCGmzg==",
        "dev": true,
        "requires": {
          "events-to-array": "^1.0.1",
          "minipass": "^3.0.0",
          "tap-yaml": "^1.0.0"
        }
      },
      "tap-yaml": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/tap-yaml/-/tap-yaml-1.0.0.tgz",
        "integrity": "sha512-Rxbx4EnrWkYk0/ztcm5u3/VznbyFJpyXO12dDBHKWiDVxy7O2Qw6MRrwO5H6Ww0U5YhRY/4C/VzWmFPhBQc4qQ==",
        "dev": true,
        "requires": {
          "yaml": "^1.5.0"
        }
      },
      "tcompare": {
        "version": "3.0.4",
        "resolved": "https://registry.npmjs.org/tcompare/-/tcompare-3.0.4.tgz",
        "integrity": "sha512-Q3TitMVK59NyKgQyFh+857wTAUE329IzLDehuPgU4nF5e8g+EUQ+yUbjUy1/6ugiNnXztphT+NnqlCXolv9P3A==",
        "dev": true,
        "requires": {
          "diff-frag": "^1.0.1"
        }
      },
      "test-exclude": {
        "version": "5.2.3",
        "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-5.2.3.tgz",
        "integrity": "sha512-M+oxtseCFO3EDtAaGH7iiej3CBkzXqFMbzqYAACdzKui4eZA+pq3tZEwChvOdNfa7xxy8BfbmgJSIr43cC/+2g==",
        "dev": true,
        "requires": {
          "glob": "^7.1.3",
          "minimatch": "^3.0.4",
          "read-pkg-up": "^4.0.0",
          "require-main-filename": "^2.0.0"
        }
      },
      "to-fast-properties": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
        "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4=",
        "dev": true
      },
      "to-regex-range": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
        "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
        "dev": true,
        "requires": {
          "is-number": "^7.0.0"
        }
      },
      "tough-cookie": {
        "version": "2.4.3",
        "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.4.3.tgz",
        "integrity": "sha512-Q5srk/4vDM54WJsJio3XNn6K2sCG+CQ8G5Wz6bZhRZoAe/+TxjWB/GlFAnYEbkYVlON9FMk/fE3h2RLpPXo4lQ==",
        "dev": true,
        "requires": {
          "psl": "^1.1.24",
          "punycode": "^1.4.1"
        },
        "dependencies": {
          "punycode": {
            "version": "1.4.1",
            "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
            "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4=",
            "dev": true
          }
        }
      },
      "treport": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/treport/-/treport-1.0.1.tgz",
        "integrity": "sha512-JbmV0whGV0kcr4Mlzc95FtcFWOIltMthYcF5h/E+i6Nd0hh+vI7ZYxr9S3DR19LXFOtlDPHSd7rGvs+KCWAuzg==",
        "dev": true,
        "requires": {
          "cardinal": "^2.1.1",
          "chalk": "^3.0.0",
          "import-jsx": "^3.0.0",
          "ink": "^2.5.0",
          "ms": "^2.1.2",
          "string-length": "^3.1.0",
          "tap-parser": "^10.0.1",
          "unicode-length": "^2.0.2"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
            "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
            "dev": true
          },
          "ansi-styles": {
            "version": "4.2.0",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.2.0.tgz",
            "integrity": "sha512-7kFQgnEaMdRtwf6uSfUnVr9gSGC7faurn+J/Mv90/W+iTtN0405/nLdopfMWwchyxhbGYl6TC4Sccn9TUkGAgg==",
            "dev": true,
            "requires": {
              "@types/color-name": "^1.1.1",
              "color-convert": "^2.0.1"
            }
          },
          "chalk": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
            "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
            "dev": true,
            "requires": {
              "ansi-styles": "^4.1.0",
              "supports-color": "^7.1.0"
            }
          },
          "color-convert": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
            "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
            "dev": true,
            "requires": {
              "color-name": "~1.1.4"
            }
          },
          "color-name": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
            "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
            "dev": true
          },
          "has-flag": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
            "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
            "dev": true
          },
          "strip-ansi": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
            "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
            "dev": true,
            "requires": {
              "ansi-regex": "^2.0.0"
            }
          },
          "supports-color": {
            "version": "7.1.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.1.0.tgz",
            "integrity": "sha512-oRSIpR8pxT1Wr2FquTNnGet79b3BWljqOuoW/h4oBhxJ/HUbX5nX6JSruTkvXDCFMwDPvsaTTbvMLKZWSy0R5g==",
            "dev": true,
            "requires": {
              "has-flag": "^4.0.0"
            }
          },
          "unicode-length": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/unicode-length/-/unicode-length-2.0.2.tgz",
            "integrity": "sha512-Ph/j1VbS3/r77nhoY2WU0GWGjVYOHL3xpKp0y/Eq2e5r0mT/6b649vm7KFO6RdAdrZkYLdxphYVgvODxPB+Ebg==",
            "dev": true,
            "requires": {
              "punycode": "^2.0.0",
              "strip-ansi": "^3.0.1"
            }
          }
        }
      },
      "trivial-deferred": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/trivial-deferred/-/trivial-deferred-1.0.1.tgz",
        "integrity": "sha1-N21NKdlR1jaKb3oK6FwvTV4GWPM=",
        "dev": true
      },
      "ts-node": {
        "version": "8.5.4",
        "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-8.5.4.tgz",
        "integrity": "sha512-izbVCRV68EasEPQ8MSIGBNK9dc/4sYJJKYA+IarMQct1RtEot6Xp0bXuClsbUSnKpg50ho+aOAx8en5c+y4OFw==",
        "dev": true,
        "requires": {
          "arg": "^4.1.0",
          "diff": "^4.0.1",
          "make-error": "^1.1.1",
          "source-map-support": "^0.5.6",
          "yn": "^3.0.0"
        }
      },
      "tunnel-agent": {
        "version": "0.6.0",
        "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
        "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
        "dev": true,
        "requires": {
          "safe-buffer": "^5.0.1"
        }
      },
      "tweetnacl": {
        "version": "0.14.5",
        "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
        "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
        "dev": true
      },
      "type-fest": {
        "version": "0.8.1",
        "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
        "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
        "dev": true
      },
      "typedarray-to-buffer": {
        "version": "3.1.5",
        "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
        "integrity": "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==",
        "dev": true,
        "requires": {
          "is-typedarray": "^1.0.0"
        }
      },
      "typescript": {
        "version": "3.7.4",
        "resolved": "https://registry.npmjs.org/typescript/-/typescript-3.7.4.tgz",
        "integrity": "sha512-A25xv5XCtarLwXpcDNZzCGvW2D1S3/bACratYBx2sax8PefsFhlYmkQicKHvpYflFS8if4zne5zT5kpJ7pzuvw==",
        "dev": true
      },
      "ua-parser-js": {
        "version": "0.7.20",
        "resolved": "https://registry.npmjs.org/ua-parser-js/-/ua-parser-js-0.7.20.tgz",
        "integrity": "sha512-8OaIKfzL5cpx8eCMAhhvTlft8GYF8b2eQr6JkCyVdrgjcytyOmPCXrqXFcUnhonRpLlh5yxEZVohm6mzaowUOw=="
      },
      "uglify-js": {
        "version": "3.7.3",
        "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.7.3.tgz",
        "integrity": "sha512-7tINm46/3puUA4hCkKYo4Xdts+JDaVC9ZPRcG8Xw9R4nhO/gZgUM3TENq8IF4Vatk8qCig4MzP/c8G4u2BkVQg==",
        "dev": true,
        "optional": true,
        "requires": {
          "commander": "~2.20.3",
          "source-map": "~0.6.1"
        }
      },
      "unicode-length": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/unicode-length/-/unicode-length-1.0.3.tgz",
        "integrity": "sha1-Wtp6f+1RhBpBijKM8UlHisg1irs=",
        "dev": true,
        "requires": {
          "punycode": "^1.3.2",
          "strip-ansi": "^3.0.1"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
            "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
            "dev": true
          },
          "punycode": {
            "version": "1.4.1",
            "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
            "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4=",
            "dev": true
          },
          "strip-ansi": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
            "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
            "dev": true,
            "requires": {
              "ansi-regex": "^2.0.0"
            }
          }
        }
      },
      "uri-js": {
        "version": "4.2.2",
        "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
        "integrity": "sha512-KY9Frmirql91X2Qgjry0Wd4Y+YTdrdZheS8TFwvkbLWf/G5KNJDCh6pKL5OZctEW4+0Baa5idK2ZQuELRwPznQ==",
        "dev": true,
        "requires": {
          "punycode": "^2.1.0"
        }
      },
      "util-deprecate": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
        "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",
        "dev": true,
        "optional": true
      },
      "uuid": {
        "version": "3.3.3",
        "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.3.3.tgz",
        "integrity": "sha512-pW0No1RGHgzlpHJO1nsVrHKpOEIxkGg1xB+v0ZmdNH5OAeAwzAVrCnI2/6Mtx+Uys6iaylxa+D3g4j63IKKjSQ==",
        "dev": true
      },
      "validate-npm-package-license": {
        "version": "3.0.4",
        "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
        "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
        "dev": true,
        "requires": {
          "spdx-correct": "^3.0.0",
          "spdx-expression-parse": "^3.0.0"
        }
      },
      "verror": {
        "version": "1.10.0",
        "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
        "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
        "dev": true,
        "requires": {
          "assert-plus": "^1.0.0",
          "core-util-is": "1.0.2",
          "extsprintf": "^1.2.0"
        }
      },
      "vlq": {
        "version": "0.2.3",
        "resolved": "https://registry.npmjs.org/vlq/-/vlq-0.2.3.tgz",
        "integrity": "sha512-DRibZL6DsNhIgYQ+wNdWDL2SL3bKPlVrRiBqV5yuMm++op8W4kGFtaQfCs4KEJn0wBZcHVHJ3eoywX8983k1ow==",
        "dev": true
      },
      "whatwg-fetch": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/whatwg-fetch/-/whatwg-fetch-3.0.0.tgz",
        "integrity": "sha512-9GSJUgz1D4MfyKU7KRqwOjXCXTqWdFNvEr7eUBYchQiVc744mqK/MzXPNR2WsPkmkOa4ywfg8C2n8h+13Bey1Q=="
      },
      "which": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
        "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
        "dev": true,
        "requires": {
          "isexe": "^2.0.0"
        }
      },
      "which-module": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
        "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho=",
        "dev": true
      },
      "widest-line": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/widest-line/-/widest-line-3.1.0.tgz",
        "integrity": "sha512-NsmoXalsWVDMGupxZ5R08ka9flZjjiLvHVAWYOKtiKM8ujtZWr9cRffak+uSE48+Ob8ObalXpwyeUiyDD6QFgg==",
        "dev": true,
        "requires": {
          "string-width": "^4.0.0"
        }
      },
      "wordwrap": {
        "version": "0.0.3",
        "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.3.tgz",
        "integrity": "sha1-o9XabNXAvAAI03I0u68b7WMFkQc=",
        "dev": true
      },
      "wrap-ansi": {
        "version": "6.2.0",
        "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
        "integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
        "dev": true,
        "requires": {
          "ansi-styles": "^4.0.0",
          "string-width": "^4.1.0",
          "strip-ansi": "^6.0.0"
        },
        "dependencies": {
          "ansi-styles": {
            "version": "4.2.0",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.2.0.tgz",
            "integrity": "sha512-7kFQgnEaMdRtwf6uSfUnVr9gSGC7faurn+J/Mv90/W+iTtN0405/nLdopfMWwchyxhbGYl6TC4Sccn9TUkGAgg==",
            "dev": true,
            "requires": {
              "@types/color-name": "^1.1.1",
              "color-convert": "^2.0.1"
            }
          },
          "color-convert": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
            "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
            "dev": true,
            "requires": {
              "color-name": "~1.1.4"
            }
          },
          "color-name": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
            "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
            "dev": true
          }
        }
      },
      "wrappy": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
        "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
        "dev": true
      },
      "write-file-atomic": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.1.tgz",
        "integrity": "sha512-JPStrIyyVJ6oCSz/691fAjFtefZ6q+fP6tm+OS4Qw6o+TGQxNp1ziY2PgS+X/m0V8OWhZiO/m4xSj+Pr4RrZvw==",
        "dev": true,
        "requires": {
          "imurmurhash": "^0.1.4",
          "is-typedarray": "^1.0.0",
          "signal-exit": "^3.0.2",
          "typedarray-to-buffer": "^3.1.5"
        }
      },
      "y18n": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.0.tgz",
        "integrity": "sha512-r9S/ZyXu/Xu9q1tYlpsLIsa3EeLXXk0VwlxqTcFRfg9EhMW+17kbt9G0NrgCmhGb5vT2hyhJZLfDGx+7+5Uj/w==",
        "dev": true
      },
      "yallist": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz",
        "integrity": "sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI=",
        "dev": true
      },
      "yaml": {
        "version": "1.7.2",
        "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.7.2.tgz",
        "integrity": "sha512-qXROVp90sb83XtAoqE8bP9RwAkTTZbugRUTm5YeFCBfNRPEp2YzTeqWiz7m5OORHzEvrA/qcGS8hp/E+MMROYw==",
        "dev": true,
        "requires": {
          "@babel/runtime": "^7.6.3"
        }
      },
      "yapool": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/yapool/-/yapool-1.0.0.tgz",
        "integrity": "sha1-9pPymjFbUNmp2iZGp6ZkXJaYW2o=",
        "dev": true
      },
      "yargs": {
        "version": "13.3.0",
        "resolved": "https://registry.npmjs.org/yargs/-/yargs-13.3.0.tgz",
        "integrity": "sha512-2eehun/8ALW8TLoIl7MVaRUrg+yCnenu8B4kBlRxj3GJGDKU1Og7sMXPNm1BYyM1DOJmTZ4YeN/Nwxv+8XJsUA==",
        "dev": true,
        "requires": {
          "cliui": "^5.0.0",
          "find-up": "^3.0.0",
          "get-caller-file": "^2.0.1",
          "require-directory": "^2.1.1",
          "require-main-filename": "^2.0.0",
          "set-blocking": "^2.0.0",
          "string-width": "^3.0.0",
          "which-module": "^2.0.0",
          "y18n": "^4.0.0",
          "yargs-parser": "^13.1.1"
        },
        "dependencies": {
          "ansi-regex": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
            "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
            "dev": true
          },
          "cliui": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/cliui/-/cliui-5.0.0.tgz",
            "integrity": "sha512-PYeGSEmmHM6zvoef2w8TPzlrnNpXIjTipYK780YswmIP9vjxmd6Y2a3CB2Ks6/AU8NHjZugXvo8w3oWM2qnwXA==",
            "dev": true,
            "requires": {
              "string-width": "^3.1.0",
              "strip-ansi": "^5.2.0",
              "wrap-ansi": "^5.1.0"
            }
          },
          "emoji-regex": {
            "version": "7.0.3",
            "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
            "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==",
            "dev": true
          },
          "is-fullwidth-code-point": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
            "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
            "dev": true
          },
          "string-width": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
            "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
            "dev": true,
            "requires": {
              "emoji-regex": "^7.0.1",
              "is-fullwidth-code-point": "^2.0.0",
              "strip-ansi": "^5.1.0"
            }
          },
          "strip-ansi": {
            "version": "5.2.0",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
            "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
            "dev": true,
            "requires": {
              "ansi-regex": "^4.1.0"
            }
          },
          "wrap-ansi": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
            "integrity": "sha512-QC1/iN/2/RPVJ5jYK8BGttj5z83LmSKmvbvrXPNCLZSEb32KKVDJDl/MOt2N01qU2H/FkzEa9PKto1BqDjtd7Q==",
            "dev": true,
            "requires": {
              "ansi-styles": "^3.2.0",
              "string-width": "^3.0.0",
              "strip-ansi": "^5.0.0"
            }
          }
        }
      },
      "yargs-parser": {
        "version": "13.1.1",
        "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-13.1.1.tgz",
        "integrity": "sha512-oVAVsHz6uFrg3XQheFII8ESO2ssAf9luWuAd6Wexsu4F3OtIW0o8IribPXYrD4WC24LWtPrJlGy87y5udK+dxQ==",
        "dev": true,
        "requires": {
          "camelcase": "^5.0.0",
          "decamelize": "^1.2.0"
        }
      },
      "yn": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.1.tgz",
        "integrity": "sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==",
        "dev": true
      },
      "yoga-layout-prebuilt": {
        "version": "1.9.3",
        "resolved": "https://registry.npmjs.org/yoga-layout-prebuilt/-/yoga-layout-prebuilt-1.9.3.tgz",
        "integrity": "sha512-9SNQpwuEh2NucU83i2KMZnONVudZ86YNcFk9tq74YaqrQfgJWO3yB9uzH1tAg8iqh5c9F5j0wuyJ2z72wcum2w==",
        "dev": true
      }
    }
  }),
  "package.json": JSON.stringify({
    "name": "tap-14.7-react-15-peerdep-collision",
    "version": "1.2.3",
    "dependencies": {
      "react": "15"
    },
    "devDependencies": {
      "tap": "unbundled"
    }
  })
})
  return path
}
