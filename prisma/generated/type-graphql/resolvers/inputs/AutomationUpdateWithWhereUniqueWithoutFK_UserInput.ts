import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationUpdateWithoutFK_UserInput } from "../inputs/AutomationUpdateWithoutFK_UserInput";
import { AutomationWhereUniqueInput } from "../inputs/AutomationWhereUniqueInput";

@TypeGraphQL.InputType("AutomationUpdateWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class AutomationUpdateWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => AutomationWhereUniqueInput, {
    nullable: false
  })
  where!: AutomationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AutomationUpdateWithoutFK_UserInput, {
    nullable: false
  })
  data!: AutomationUpdateWithoutFK_UserInput;
}
