import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AutomationCreateWithoutFK_UserInput", {
  isAbstract: true
})
export class AutomationCreateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  RefreshToken!: string;
}
