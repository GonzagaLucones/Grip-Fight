# PRD — Grip Fight Self Defense Landing Page

## Problem statement (original)
Reconstruir completamente a landing page da Grip Fight Self Defense (Jiu-Jitsu e Luta Livre em São Leopoldo - RS) com foco total em conversão: transformar tráfego de anúncios em conversas no WhatsApp (+55 51 99458-0433). Página centrada no cliente (pais, jovens/adolescentes, adultos), sem preços, sem depoimentos falsos, sem informações inventadas, usando exclusivamente as fotografias reais fornecidas. Identidade: preto/branco/cinza metálico com detalhes em vermelho; frase de posicionamento "FORJE SEU CORPO. FORTALEÇA SEU CARÁTER."; SEO local; tracking de conversão; mobile-first.

## Arquitetura
- Frontend: React (SPA single-page landing) + Tailwind + Framer Motion + Lenis (smooth scroll)
- Backend: FastAPI (template, health check em /api) — landing não consome API
- Assets: /app/frontend/public/images/ — fotos reais do projeto
- Design: "dojo noir" editorial — ink #0A0A0B / paper #F1EFE9 / blood #C8102E; Anton (display), Archivo (body), JetBrains Mono (labels); capítulos numerados, marquee de valores, hero cinético com reveal mascarado linha a linha, frames com cantos vermelhos, grain sutil, parallax no hero

## Personas
1. Pais de crianças (decisores; buscam disciplina, confiança, ambiente saudável)
2. Jovens/adolescentes (arte marcial, confiança, equipe, talvez competição)
3. Adultos iniciantes (nunca treinaram, "será que é para mim?", condicionamento, defesa pessoal)

## Implementado (2026-09-05)
- Navbar fixa com logo, 6 links-âncora, CTA WhatsApp, menu mobile fullscreen
- Hero cinético: headline mascarada linha a linha, CTAs duplos, redução de objeção, tagline, frame de foto com parallax
- Marquee editorial de valores da marca
- CAP.01 Identificação — 3 caminhos (filho / começar / levar a sério) com CTAs e eventos de tracking
- CAP.02 Transformação — 6 benefícios + manifesto + tagline
- CAP.03 Autoridade — foto de medalhas em destaque editorial + marcadores (sem números inventados)
- CAP.04 Ambiente — galeria editorial (recepção real + slots de tatame/treino)
- CAP.05 Modalidades — Jiu-Jitsu e Luta Livre + CTA contextual
- CAP.06 Equipe — César Pinheiro (credenciais) e William Chaves (história "começar mais tarde")
- CAP.07 Prova social — estrutura para depoimentos reais (3 slots, SEM depoimentos falsos) + prova visual
- CAP.08 Como funciona — 3 passos + CTA
- CAP.09 FAQ — 8 objeções em accordion + CTA
- CAP.10 Localização — NAP consistente, mapa Google embed (monocromático), foto recepção
- CTA final — reveal mascarado gigante da frase de posicionamento + 2 CTAs
- Footer completo com NAP, links, Instagram
- Botão flutuante WhatsApp (aparece após scroll, pill no desktop / compacto no mobile)
- Sistema PhotoSlot: detecta automaticamente quando o arquivo de imagem existir em /public/images e substitui o placeholder de marca (sem stock, sem imagens geradas)
- Tracking: page_view, hero_cta_click, whatsapp_click (por local), experimental_class_click, audience_kids_click, audience_adult_click, audience_competitor_click, modality_click, scroll_25/50/75/90 via dataLayer; UTMs preservadas nos links wa.me
- SEO local: title, meta description, Open Graph, canonical, JSON-LD ExerciseGym, headings hierárquicos, alt texts, lang pt-BR

## Estado das imagens
Presentes: logo-grip-fight.png (processada com transparência), 02-academia-recepcao.jpg, 04-medalhas-grip-fight.jpg, 06-cesar-pinheiro.jpg, 07-william-chaves.webp
FALTANDO (placeholders visíveis de marca, entram automaticamente ao salvar com o nome exato em /app/frontend/public/images/):
- 03-treino-grip-fight.jpg (hero, modalidade JJ, ambiente, prova social)
- grip-fight-kids.jpg (card pais, prova social)
- 08-tatame-grip-fight.jpg (ambiente)
- logo-grip-fight-luta-livre.png (modalidade Luta Livre) — ATENÇÃO: o arquivo recebido com esse nome era na verdade o logo principal; confirmar se existe logo separado de Luta Livre

## Backlog priorizado
- P0: Receber e encaixar as 4 imagens faltantes (upload pelo usuário)
- P0: Receber depoimentos reais e preencher CAP.07
- P1: Atualizar canonical/OG para o domínio final quando publicado
- P1: Conectar GTM/GA4/Meta Pixel IDs reais (estrutura dataLayer pronta)
- P2: Versão WebP/otimizada das fotos para performance extra
- P2: Página /kids dedicada se o tráfego de pais justificar

## Próximas tarefas
1. Usuário envia as 4 imagens faltantes → encaixe automático + ajuste de object-position
2. Usuário envia depoimentos reais → preencher slots
3. Configurar IDs de tracking reais
4. Publicar em domínio final e atualizar canonical
