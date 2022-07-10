import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingWhereInput } from "../inputs/SettingWhereInput";

@TypeGraphQL.InputType("SettingRelationFilter", {
  isAbstract: true
})
export class SettingRelationFilter {
  @TypeGraphQL.Field(_type => SettingWhereInput, {
    nullable: true
  })
  is?: SettingWhereInput | undefined;

  @TypeGraphQL.Field(_type => SettingWhereInput, {
    nullable: true
  })
  isNot?: SettingWhereInput | undefined;
}
