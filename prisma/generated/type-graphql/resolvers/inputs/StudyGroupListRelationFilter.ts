import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudyGroupWhereInput } from "../inputs/StudyGroupWhereInput";

@TypeGraphQL.InputType("StudyGroupListRelationFilter", {
  isAbstract: true
})
export class StudyGroupListRelationFilter {
  @TypeGraphQL.Field(_type => StudyGroupWhereInput, {
    nullable: true
  })
  every?: StudyGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => StudyGroupWhereInput, {
    nullable: true
  })
  some?: StudyGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => StudyGroupWhereInput, {
    nullable: true
  })
  none?: StudyGroupWhereInput | undefined;
}
