import { type StructureBuilder, type DefaultDocumentNodeResolver } from 'sanity/desk'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Контент')
    .items([
      S.listItem()
        .title('Настройки')
        .child(
          S.list()
            .title('Настройки')
            .items([
              S.listItem()
                .title('Навигация')
                .child(S.document().schemaType('navigation').documentId('navigation')),
              S.listItem()
                .title('Главная страница')
                .child(S.document().schemaType('mainPage').documentId('mainPage'))
            ])
        ),
      S.listItem()
        .title('История')
        .child(
          S.list()
            .title('История')
            .items([
              S.listItem()
                .title('Десятилетия')
                .child(S.documentTypeList('decade').title('Десятилетия'))
            ])
        ),
      S.listItem()
        .title('Направления')
        .child(
          S.list()
            .title('Направления')
            .items([
              S.listItem()
                .title('Сборы')
                .child(S.document().schemaType('seniorCamp').documentId('seniorCamp')),
              S.listItem()
                .title('Зимовка')
                .child(S.document().schemaType('winterCamp').documentId('winterCamp')),
              S.listItem()
                .title('Соловки')
                .child(S.document().schemaType('solovki').documentId('solovki')),
              S.listItem()
                .title('Учеба актива')
                .child(S.document().schemaType('activities').documentId('activities'))
            ])
        )
    ])
