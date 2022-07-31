import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOnStudyGroupWhereInput } from "../inputs/UserOnStudyGroupWhereInput";

@TypeGraphQL.InputType("UserOnStudyGroupListRelationFilter", {
  isAbstract: true
})
export class UserOnStudyGroupListRelationFilter {
  @TypeGraphQL.Field(_type => UserOnStudyGroupWhereInput, {
    nullable: true
  })
  every?: UserOnStudyGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserOnStudyGroupWhereInput, {
    nullable: true
  })
  some?: UserOnStudyGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserOnStudyGroupWhereInput, {
    nullable: true
  })
  none?: UserOnStudyGroupWhereInput | undefined;
}
