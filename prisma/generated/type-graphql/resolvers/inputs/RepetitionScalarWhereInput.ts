import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("RepetitionScalarWhereInput", {
  isAbstract: true
})
export class RepetitionScalarWhereInput {
  @TypeGraphQL.Field(_type => [RepetitionScalarWhereInput], {
    nullable: true
  })
  AND?: RepetitionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepetitionScalarWhereInput], {
    nullable: true
  })
  OR?: RepetitionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepetitionScalarWhereInput], {
    nullable: true
  })
  NOT?: RepetitionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  RepetitionID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  FK_FlowID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  FK_FlashcardStackID?: StringNullableFilter | undefined;
}
