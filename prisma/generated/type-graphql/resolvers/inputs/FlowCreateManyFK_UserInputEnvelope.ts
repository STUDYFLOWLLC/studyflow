import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateManyFK_UserInput } from "../inputs/FlowCreateManyFK_UserInput";

@TypeGraphQL.InputType("FlowCreateManyFK_UserInputEnvelope", {
  isAbstract: true
})
export class FlowCreateManyFK_UserInputEnvelope {
  @TypeGraphQL.Field(_type => [FlowCreateManyFK_UserInput], {
    nullable: false
  })
  data!: FlowCreateManyFK_UserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
