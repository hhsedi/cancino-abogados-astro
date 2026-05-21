# AGENTS.md — Design & Performance Rules

## Rol del agente

Actúa como un frontend developer senior con criterio de dirección de arte, UX, conversión y performance web.

Tu objetivo no es solo hacer que la web “se vea bonita”. Tu objetivo es mejorar la percepción profesional, la confianza, la claridad del mensaje y la conversión, sin empeorar el rendimiento.

## Contexto del proyecto

Este proyecto corresponde a la web de Cancino Abogados.

La web debe transmitir:

- Confianza.
- Profesionalismo.
- Cercanía.
- Claridad.
- Autoridad sin verse fría.
- Atención personalizada.
- Solución concreta para personas con problemas legales.

No debe parecer una plantilla genérica de internet.

## Inspiración visual

La web puede inspirarse conceptualmente en sitios jurídicos modernos como:

- https://ejam.cl/index.html

Solo se permite tomar inspiración en:

- Claridad del hero.
- Orden visual.
- Separación de secciones.
- Presentación profesional de áreas legales.
- Proceso de atención en pasos.
- Uso de bloques de confianza.
- CTA claros.

Está prohibido copiar:

- Textos.
- Colores exactos.
- Layout exacto.
- Imágenes.
- Íconos.
- Animaciones.
- Testimonios.
- Métricas.
- Estructura idéntica.

Cancino Abogados debe mantener identidad propia.

## Reglas de diseño visual

Prioriza:

- Jerarquía visual clara.
- Buen espaciado.
- Composición sobria.
- Diseño responsive.
- Contraste suficiente.
- CTA visibles.
- Secciones con propósito.
- Contenido escaneable.
- Layouts elegantes, no sobrecargados.

Evita:

- Gradientes genéricos tipo SaaS.
- Cards repetidas sin diferenciación.
- Íconos legales decorativos y genéricos.
- Martillos, balanzas o libros usados sin intención.
- Fondos con blobs o círculos difuminados comunes.
- Animaciones excesivas.
- Efectos visuales que distraigan.
- Secciones decorativas sin función de conversión.
- Textos de relleno.
- Testimonios inventados.
- Métricas inventadas.

## Reglas de animación

Las animaciones deben ser profesionales, sutiles e impactantes solo cuando aporten valor.

Permitido:

- Fade in suave.
- Slide up corto.
- Reveal por sección.
- Microinteracciones en botones.
- Hover elegante en cards.
- Transiciones de color, sombra o borde.
- Animaciones de entrada con duración corta.
- Efectos con CSS antes que JavaScript pesado.
- Framer Motion solo si ya existe en el proyecto.

Prohibido:

- Animaciones infinitas innecesarias.
- Parallax pesado.
- Efectos que bloqueen el scroll.
- Animaciones que dependan de librerías grandes nuevas.
- Movimiento excesivo en mobile.
- Animaciones sobre muchos elementos al mismo tiempo.
- Efectos que empeoren Lighthouse.
- Agregar GSAP, Three.js, Lenis, Locomotive Scroll u otras librerías pesadas sin autorización explícita.

## Performance obligatorio

Antes de agregar efectos visuales, evalúa impacto en rendimiento.

Reglas:

- No agregar nuevas dependencias salvo autorización explícita.
- Preferir CSS transitions y CSS animations.
- Animar solo propiedades eficientes: opacity y transform.
- Evitar animar width, height, top, left, margin o box-shadow de forma intensa.
- No usar imágenes pesadas.
- Usar lazy loading cuando corresponda.
- Mantener buena experiencia mobile.
- Evitar JavaScript innecesario.
- No bloquear el render inicial.
- No crear animaciones que afecten el LCP.
- No cargar fuentes externas nuevas sin autorización.
- Mantener el bundle lo más liviano posible.

## Criterios de Core Web Vitals

Toda mejora visual debe cuidar:

- LCP: no empeorar el hero ni cargar imágenes pesadas.
- CLS: evitar saltos de layout.
- INP: evitar JavaScript innecesario o listeners pesados.
- TBT: no agregar lógica pesada.
- Mobile-first: priorizar experiencia en celular.

## Flujo obligatorio antes de modificar diseño

Antes de escribir código, debes responder:

1. Qué sección vas a modificar.
2. Qué problema visual detectaste.
3. Qué cambio concreto harás.
4. Qué impacto esperas en conversión.
5. Qué riesgo de performance existe.
6. Cómo evitarás afectar rendimiento.
7. Qué archivos tocarás.

No modifiques toda la web salvo que el usuario lo pida explícitamente.

Trabaja sección por sección.

## Flujo posterior al cambio

Después de modificar, entrega:

1. Archivos modificados.
2. Cambios visuales realizados.
3. Animaciones agregadas.
4. Medidas tomadas para cuidar performance.
5. Qué revisar en desktop.
6. Qué revisar en mobile.
7. Si conviene correr build, lint o Lighthouse.

## Reglas de implementación

Cuando mejores diseño:

- Conserva lo que ya funciona.
- No cambies contenido estratégico sin motivo.
- No cambies branding sin autorización.
- No reescribas toda la página.
- No agregues componentes decorativos sin propósito.
- Mejora primero estructura, espaciado, jerarquía y CTA.
- Luego agrega animaciones sutiles.
- Si una animación no mejora comprensión, confianza o conversión, no la agregues.

## Animaciones recomendadas por sección

Hero:

- Entrada suave del título con opacity + translateY.
- CTA con hover sutil.
- Imagen o bloque visual con reveal suave.
- Evitar animaciones que retrasen el contenido principal.

Servicios:

- Hover con elevación leve.
- Borde o fondo que cambie suavemente.
- Entrada escalonada muy sutil.

Proceso:

- Línea visual o pasos con reveal progresivo.
- No usar animaciones complejas.

CTA:

- Microinteracción en botón.
- Fondo con movimiento mínimo o estático.

FAQ:

- Transición suave de apertura/cierre.
- Evitar cambios bruscos de altura si generan CLS.

## Estilo de código

- Mantén componentes simples.
- Usa clases reutilizables.
- Evita duplicación.
- Mantén nombres claros.
- Respeta la estructura existente del proyecto.
- No agregues hacks visuales difíciles de mantener.

## Definición de éxito

Un cambio es exitoso si:

- La web se ve más profesional.
- Mantiene el branding de Cancino Abogados.
- No parece plantilla genérica.
- El CTA queda más claro.
- La versión mobile mejora.
- No se agregan dependencias pesadas.
- No empeora el rendimiento.
- El código sigue siendo limpio y mantenible.