import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowViewCreateManyFK_UserInput } from "../inputs/FlowViewCreateManyFK_UserInput";

@TypeGraphQL.InputType("FlowViewCreateManyFK_UserInputEnvelope", {
  isAbstract: true
})
export class FlowViewCreateManyFK_UserInputEnvelope {
  @TypeGraphQL.Field(_type => [FlowViewCreateManyFK_UserInput], {
    nullable: false
  })
  data!: FlowViewCreateManyFK_UserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
