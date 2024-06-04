// src/lib/graphql-client.js
import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cluvpp6wl115107umu45uwo0c/master', // Replace with your Hygraph endpoint
        headers: {
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTc1MDczNzksImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2x1dnBwNndsMTE1MTA3dW11NDV1d28wYy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vIiwic3ViIjoiOTI5NDY0YWItNmIzOC00M2ZjLTlkZmQtZmJiZWNkMTAxZjA5IiwianRpIjoiY2x4MGZqcmZzMHF3bDA3dzVmb3kwY2hpZiJ9.TFL4-9667VPiw-t8y6sMTN6SAUhIENQwAThoz5RVmrXmRlJs-YEJdiOjNe0p1jTXZELdU6AQoCw8EAtLM3GPPXq9vOKEaiQNwrgKhgeChlQYOFbo8B6qHKyiU7hgDsV9RvVxAPwj2tPXKh8n9o3JbRMawM0_X8e9O3_pQtJZyoED3LyS-1_7bT69aeNgA31bArfnhuDo5UkuoztLQ2yeYXe-3G4okTGQpGbI7LcB3Uil-8SfFuVp2-naKNxNDEEdxTatPHdfCdFApNKfkzLf0VAMQ-1BlcQu-5e51yIg-1mDIGV6NMk9CiLn2DlkJn_wZ_T_ISrfhR_Zqdio13Dy2oi7LOdFrm5z233l7aCNgKppOZPJwpdk0wKXaPuqpRbtsWBnHUZa8eVEgaCBMdK6QtzTepPZVdJpee00c1_KNrPhkf_VioGU3x02-a5lVr0xsDxQ9xnWOdB9imgHTb_6x9NrtKPuyC6tL6IE5xOzb_VBR8Qxe2eXs1P5f5LIz4Aux91zexgXzCvAQtC0jhX2gRtY1aP7nNifq3Xb1s7LP5fzfHGZ_4y-wD6nhulEfMkPqygD6-19mTS-iC45-IODDu3JKL4eJ2A1wpM6WpWYNhBbmW4Q5ZqQ0bdB1ikY4ZALiObq_tr0GUftfx9si1m61qCR1kutusU5urBKhGuqfsw` // Replace with your API token
        }
    }),
    cache: new InMemoryCache()
});

export { client, gql };