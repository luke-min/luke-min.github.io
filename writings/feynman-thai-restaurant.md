---
layout: default
title: Feynman's Thai Restaurant Problem
permalink: /writings/feynman-thai-restaurant/
---

## Introduction

In the 1970s, [the physicist Richard Feynman dined at a Thai restaurant](https://www.scientificamerican.com/article/how-math-can-help-you-decide-what-to-order-for-dinner/) with a friend. When his friend agonized over ordering his favorite known dish or something new, Feynman used the opportunity to turn this into a math problem. 

Originally scrawled into a napkin scrawl, the setup proves that you should try different items until you reach a quality threshold. If you pass that point, you settle on the best dish encountered so far!

## Setup

Let's say there is a known favorite dish with value $p\in\left[0,1\right]$. Each unknown dish has value $X \sim \text{Uniform}[0,1]$. Each night, he chooses between (1) ordering the known favorite for all remaining $m$ meals; and (2) trying a new dish tonight with random value $X$. 

This now becomes an optimal stopping problem. Let's call $V_{m} \left( p \right)$ the value function for the case with $m$ remaining visits. $x$ is our state variable.

Then, each time we have


$$
V_{m} \left(p\right) = \max\{p + V_{m-1}(p), \mathbb{E}\left[X + V_{m-1} \left(\max\{p, X\}\right)\right]  \}
$$


with a terminal condition $V_{0} \left( p \right)$. 

The first quantity the payoff from sticking to the current dish with value $p$. The second quantity $\mathbb{E}\left[X + V_{m-1} \left(\max\{p, X\}\right)\right]$ draws from $X$, finds a new best known value up to that meal $\max\{p,X\}$, which then becomes the new state variable in the value function $V_{m-1}$. The value function encodes the possibility that this new meal $X$ is not worth commiting to, and may have to draw again next period.

## Solution

It's always good to start with the intuition first. Remember:

* $p$ is how good your current favorite is
* $m$ how many meals you have left
* $X$ quality of a new dish (which is not known)

The more meals you have left, the more valuable exploration is. Exploration is valuable not just because you might get a better meal than your known favorite, but also because it raises the bar for your future meals. So the cutoff for commitment is higher when $m$ is large, lower when $m$ is small.

We can make this simpler. At the optimum, you will start exploring immediately, until you commit. You can rule out cases like "eat $p$ for $k$ meals, then try a new dish $X$". This will give you $kp+X$, whereas exploring today, and then eating the better of $p$ and $X$ will give you $X+k\max\{p,X\}$. The latter is always larger.

So the value function is actually


$$
V_{m} \left(p\right) = \max\{pm , \mathbb{E}\left[X + V_{m-1} \left(\max\{p, X\}\right)\right]  \}
$$


after modifying the first quantity. Hence, the lesson is:


$$
\boxed{\text{If you are ever going to explore, explore right now.}}
$$


Now we can solve it. Let $p_m$ be the cutoff. Then


$$
\text{Stop payoff} = \text{Explore payoff}
$$


which can be written as 


$$
mp = \int_{0}^{p} \left[ x + (m-1)p \right]dx + \int_{p}^{1} \left[ x + \left(m -1 \right)x \right]dx
$$


$p_m$ is the value that makes this hold.

The first quantity on the right hand side is the case where you draw something worse then $p$ and you stick with what you know. The second quantity is the case where you draw something better, and you stay with $x$. We are implicitly using the fact that $p_{m} > p_{m-1}$.

If you solve that you get


$$
p_m = \frac{\sqrt{m}}{\sqrt{m}+1}
$$


and the policy is:


$$
\begin{aligned}
\text{Try new dish} & \quad \text{if }p < p_m \\
\text{Stick with favoriate} & \quad \text{if }p \geq p_m \\
\end{aligned}
$$



## Conclusion

![Feynman's restaurant problem](/writings/French_breaker.webp)

