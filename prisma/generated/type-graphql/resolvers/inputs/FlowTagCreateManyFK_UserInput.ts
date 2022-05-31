import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("FlowTagCreateManyFK_UserInput", {
  isAbstract: true
})
export class FlowTagCreateManyFK_UserInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FlowTagID?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  Public?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;
}
