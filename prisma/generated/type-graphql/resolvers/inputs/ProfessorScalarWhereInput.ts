import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ProfessorScalarWhereInput", {
  isAbstract: true
})
export class ProfessorScalarWhereInput {
  @TypeGraphQL.Field(_type => [ProfessorScalarWhereInput], {
    nullable: true
  })
  AND?: ProfessorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorScalarWhereInput], {
    nullable: true
  })
  OR?: ProfessorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorScalarWhereInput], {
    nullable: true
  })
  NOT?: ProfessorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ProfessorID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_SchoolID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Email?: StringNullableFilter | undefined;
}
