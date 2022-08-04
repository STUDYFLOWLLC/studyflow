import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationCreateWithoutFK_UserInput } from "../inputs/AutomationCreateWithoutFK_UserInput";
import { AutomationWhereUniqueInput } from "../inputs/AutomationWhereUniqueInput";

@TypeGraphQL.InputType("AutomationCreateOrConnectWithoutFK_UserInput", {
  isAbstract: true
})
export class AutomationCreateOrConnectWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => AutomationWhereUniqueInput, {
    nullable: false
  })
  where!: AutomationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AutomationCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: AutomationCreateWithoutFK_UserInput;
}
