import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagCreateManyFK_UserInput } from "../inputs/FlowTagCreateManyFK_UserInput";

@TypeGraphQL.InputType("FlowTagCreateManyFK_UserInputEnvelope", {
  isAbstract: true
})
export class FlowTagCreateManyFK_UserInputEnvelope {
  @TypeGraphQL.Field(_type => [FlowTagCreateManyFK_UserInput], {
    nullable: false
  })
  data!: FlowTagCreateManyFK_UserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
