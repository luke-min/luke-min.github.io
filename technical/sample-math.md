---
layout: default
title: Singular Value Decomposition Notes
---

Singular Value Decomposition (SVD) is one of the most powerful tools in linear algebra.  
It allows us to factorize any real matrix \( A \in \mathbb{R}^{m \times n} \).

## Definition

For any matrix \\( A \\), there exist orthogonal matrices \\( U \\) and \\( V \\), and a diagonal matrix \\( \Sigma \\) such that:

$$
A = U \Sigma V^{T} 
$$

$$
\sum_i \sigma_i
$$

where:

- \\( U \in \mathbb{R}^{m \times m} \\)
- \\( \Sigma \in \mathbb{R}^{m \times n} \\)
- \\( V \in \mathbb{R}^{n \times n} \\)

The diagonal entries of \\( \Sigma \\), denoted \\( \sigma_i \\), are called **singular values**.

## Rank Approximation

A key application is low-rank approximation.

If we write:

$$
A = \sum_{i=1}^{r} \sigma_i u_i v_i^{T}
$$

then the best rank-\(k\) approximation (in Frobenius norm) is:

$$
A_k = \sum_{i=1}^{k} \sigma_i u_i v_i^{T}
$$

This is the foundation of:

- PCA  
- matrix compression  
- recommender systems  
- latent factor models  

## Geometric Interpretation

SVD can be interpreted as:

1. Rotate space via \( V^{T} \)
2. Stretch along orthogonal axes via \( \Sigma \)
3. Rotate again via \( U \)

Thus SVD transforms the unit sphere into an ellipsoid.

## Condition Number

The stability of a matrix is governed by:

$$
\kappa(A) = \frac{\sigma_{\max}}{\sigma_{\min}}
$$

Large condition numbers imply numerical instability.

---

This post exists purely to test layout, spacing, and math rendering.