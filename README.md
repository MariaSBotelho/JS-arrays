# 📚 Arrays e Loops em JavaScript

## 🧩 Arrays

Um **array** é uma lista ordenada de valores enumerados, onde:

* Cada valor é chamado de **elemento**
* Cada elemento possui uma posição chamada **índice**

```js
const numero = [5]; // array com 1 elemento
const nums = [50, 43, 12]; // array com 3 elementos

// Índices:
            0   1   2
```

* **Valores = elementos**
* **length** → tamanho do array (quantidade de elementos)

```js
nums.length // 3
```

📌 Cada elemento está localizado em uma posição (índice) dentro do array.

---

## 🕳️ Array Esparso

Um **array esparso** possui posições vazias entre os índices:

```js
const arrayVazia = [];
```

* Pode ter "buracos" (índices sem valor definido)
* Mesmo adicionando/removendo elementos, os espaços vazios são mantidos

---

## 🔁 Loops (Laços de Repetição)

Utilizados para percorrer arrays e executar código para cada elemento.

⚠️ **Cuidado com loops infinitos!**

* Se não definir corretamente a condição de parada, pode travar o navegador/computador

### Exemplo:

```js
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
```

---

## 🔄 Funções Callback

Uma **callback** é uma função passada como argumento para outra função.

### Métodos comuns com callback:

### 🔹 forEach()

* Executa uma função para cada elemento
* Não retorna valor

```js
nums.forEach((valor, indice) => {
  console.log(valor, indice);
});
```

---

### 🔹 map()

* Retorna um **novo array**

```js
const dobrados = nums.map(n => n * 2);
```

---

### 🔹 filter()

* Retorna elementos que passam em um teste (**true/false**)

```js
const maiores = nums.filter(n => n > 20);
```

---

### 🔹 reduce()

* Reduz o array a um único valor

```js
const soma = nums.reduce((acum, atual) => {
  return atual + acum;
}, 0);
```

* `acum` → acumulador
* `atual` → valor atual

---

## ⚙️ Métodos de Array

Um **método** é uma função associada a um array ou objeto.

---

### 📌 Principais métodos:

### 🔗 concat()

Junta arrays (não altera o original)

```js
const novo = arr1.concat(arr2);
```

---

### 🔍 filter()

Filtra elementos com base em uma condição

---

### 🎯 find()

Retorna o **primeiro elemento** que satisfaz a condição

---

### 🔢 findIndex()

Retorna o **índice** do elemento encontrado

---

### 🔎 indexOf()

Retorna o índice da **primeira ocorrência**

* Retorna `-1` se não encontrar

---

### 🔚 lastIndexOf()

Retorna o índice da **última ocorrência**

---

### 🔁 forEach()

Executa função para cada elemento (sem retorno)

---

### ❌ pop()

Remove o **último elemento**

---

### ⬅️ shift()

Remove o **primeiro elemento**
(Reorganiza os índices)

---

### ➕ push()

Adiciona elemento no **final**

---

### ⬆️ unshift()

Adiciona elemento no **início**
(Reorganiza os índices)

---

### 🧮 reduce()

Reduz o array a um único valor

---

### 🔄 reduceRight()

Igual ao reduce(), mas começa do final

---

### 🔃 reverse()

Inverte a ordem do array

---

### ✂️ slice()

Copia parte do array

---

### 🔤 sort()

Ordena os elementos (Unicode)

⚠️ Para números, use função auxiliar:

```js
nums.sort((a, b) => a - b);
```

---

### ✂️ splice()

* Remove e/ou adiciona elementos
* Permite escolher índice

```js
nums.splice(1, 2); // remove 2 elementos a partir do índice 1
```

---

## ✅ Resumo

* Arrays armazenam dados em sequência com índices
* Loops percorrem arrays
* Callbacks permitem lógica personalizada
* Métodos facilitam manipulação de dados

---
