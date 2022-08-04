import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationCreateManyFK_UserInput } from "../inputs/AutomationCreateManyFK_UserInput";

@TypeGraphQL.InputType("AutomationCreateManyFK_UserInputEnvelope", {
  isAbstract: true
})
export class AutomationCreateManyFK_UserInputEnvelope {
  @TypeGraphQL.Field(_type => [AutomationCreateManyFK_UserInput], {
    nullable: false
  })
  data!: AutomationCreateManyFK_UserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
