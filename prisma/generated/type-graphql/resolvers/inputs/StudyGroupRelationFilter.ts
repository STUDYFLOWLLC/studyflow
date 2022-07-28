import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudyGroupWhereInput } from "../inputs/StudyGroupWhereInput";

@TypeGraphQL.InputType("StudyGroupRelationFilter", {
  isAbstract: true
})
export class StudyGroupRelationFilter {
  @TypeGraphQL.Field(_type => StudyGroupWhereInput, {
    nullable: true
  })
  is?: StudyGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => StudyGroupWhereInput, {
    nullable: true
  })
  isNot?: StudyGroupWhereInput | undefined;
}
