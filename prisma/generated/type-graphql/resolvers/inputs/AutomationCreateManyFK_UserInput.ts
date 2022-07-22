import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AutomationCreateManyFK_UserInput", {
  isAbstract: true
})
export class AutomationCreateManyFK_UserInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  AutomationID?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  RefreshToken!: string;
}
